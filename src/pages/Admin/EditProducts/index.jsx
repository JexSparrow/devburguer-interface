import { FileArrowUp } from "@phosphor-icons/react";
import { ContainerBox, Form, Input, InputGroup, Label, LabelUpload, Select, SubmitButton, ErrorMessage, ConteinerCheckBox } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { api } from "../../../services/api"
import { toast } from "react-toastify";

const schema = yup.object({
    name: yup.string().required("Digite o nome do Produto"),
    price: yup.number().positive().required("Digite o Preço do Produto").typeError("Digite o Preço do Produto"),
    category: yup.object().required("Escolha uma categoria"),
    offer: yup.bool(),
});

export function EditProducts() {

    const [fileName, setFileName] = useState(null);
    const [categories, setCategories] = useState([]);

    const data = useLocation();
    const navigate = useNavigate();

    const {
        state: { product },
    } = useLocation();

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
        productFormData.append("offer", data.offer);

        await toast.promise(api.put(`/products/${product.id}`, productFormData), {
            pending: "Editando Produto...",
            success: "Produto Editado com Sucesso!",
            error: "Falha ao Editar produto, tente novamente!"
        });

        setTimeout(() => {
            navigate('/admin/todos-produtos');
        }, 2000);
    };

    return (
        <ContainerBox>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <Label>Nome</Label>
                    <Input type="text"
                        {...register("name")}
                        defaultValue={product.name} // Verificação aqui
                    />
                    <ErrorMessage>{errors?.name?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Preço</Label>
                    <Input type="number"
                        {...register("price")}
                        defaultValue={product.price}
                    />
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
                        defaultValue={product.category}
                        render={({ field }) => (
                            <Select
                                {...field}
                                placeholder="Selecione uma opção"
                                options={categories}
                                getOptionLabel={(category) => category.name}
                                getOptionValue={(category) => category.id}
                                menuPortalTarget={document.body}
                                defaultValue={product.category}
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.category?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <ConteinerCheckBox>
                        <input type="checkbox"
                            {...register("offer")}
                            defaultChecked={product.offer}
                        />
                        <Label>Produto em Oferta ?</Label>
                    </ConteinerCheckBox>
                </InputGroup>

                <SubmitButton>Editar Produto</SubmitButton>
            </Form>
        </ContainerBox>
    );
}