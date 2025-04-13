import { FileArrowUp } from "@phosphor-icons/react";
import { ContainerBox, Form, Input, InputGroup, Label, LabelUpload, Select, SubmitButton, ErrorMessage } from "./styles";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import { api } from "../../../services/api"
import { toast } from "react-toastify";

const schema = yup.object({
    name: yup.string().required("Digite o nome do Produto"),
    price: yup.number().positive().required("Digite o Preço do Produto").typeError("Digite o Preço do Produto"),
    category: yup.object().required("Escolha uma categoria"),

    file: yup.mixed().test("required", "Escolha um arquivo para Continuar", value => {
        return value && value.length > 0;

    }).test("fileSize", "O arquivo deve ter no máximo 5mb", value => {
        return value && value.length > 0 && value[0].size < 5000000;

    }).test("type", "Carregue apenas imagens PNG ou JPG", value => {
        return value && value.length > 0 && (value[0].type === "image/jpeg" || value[0].type === "image/png");
    }),
});

export function NewProducts() {

    const [fileName, setFileName] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        async function loadCategories() {

            const { data } = await api.get('/categories-file');

            setCategories(data);
        }

        loadCategories();

    }, []);



    const { register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({

        resolver: yupResolver(schema),

    });

    const onSubmit = async (data) => {

        const productFormData = new FormData();

        productFormData.append("name", data.name);
        productFormData.append("price", data.price);
        productFormData.append("category_id", data.category.id);
        productFormData.append("file", data.file[0]);

        await toast.promise(api.post('/products', productFormData), {
            pending: "Adicionando Produto...",
            success: "Produto Criado com Sucesso!",
            error: "Falha ao adicionar produto, tente novamente!"
        });
    };



    return (
        <ContainerBox>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <Label>Nome</Label>
                    <Input type="text" {...register("name")} />
                    <ErrorMessage>{errors?.name?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Preço</Label>
                    <Input type="number" {...register("price")} />
                    <ErrorMessage>{errors?.price?.message}</ErrorMessage>

                </InputGroup>

                <InputGroup>
                    <LabelUpload>
                        <FileArrowUp size={30} /> {fileName || "Upload do Arquivo"}

                        <input type="file"
                            {...register("file")}
                            accept="image/png, image/jpg"
                            onChange={(value) => {
                                setFileName(value.target.files[0]?.name);
                                register("file").onChange(value);
                            }}
                        />
                    </LabelUpload>
                    <ErrorMessage>{errors?.file?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Categoria</Label>
                    <Controller
                        name="category"
                        control={control}
                        render={({ field }) => (


                            <Select
                                {...field}
                                placeholder="Selecione uma opção"
                                options={categories}
                                getOptionLabel={(category) => category.name}
                                getOptionValue={(category) => category.id}
                                menuPortalTarget={document.body}

                            />
                        )}
                    />
                    <ErrorMessage>{errors?.category?.message}</ErrorMessage>
                </InputGroup>

                <SubmitButton>Adicionar Produto</SubmitButton>

            </Form>
        </ContainerBox>
    )
}