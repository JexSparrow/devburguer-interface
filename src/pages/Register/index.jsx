import { Conteiner, Form, InputConteiner, LeftConteiner, Link, Paragraph, RightConteiner, Title } from './styles'
import { DefaultButton } from '../../components/Button/styles'
import Logo from '../../assets/Logo.svg'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { toast } from 'react-toastify';

import { api } from '../../services/api';

export function Register() {

    const schema = yup.object({
        name: yup.string().required('O nome é obrigatório *'),
        email: yup.string().email('Digite um email válido *').required('Este campo é obrigatório *'),
        password: yup.string().min(6, 'A senha deve ter no mínimo 6 caractéres *').required('Este campo é obrigatório *'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas devem ser iguais!').required('Confirme sua senha'),

    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {

        try {

            const { status } = await api.post('/users', {
                name: data.name,
                email: data.email,
                password: data.password,
            },
                {
                    validateStatus: () => true,
                },
            );

            if (status === 200 || status === 201) {
                toast.success('Conta criada com Sucesso!')
            } else if (status === 400 || status === 409) {
                toast.error('Email já cadastrado. Faça Login para continuar!')
            } else {
                throw new Error();
            }

        } catch (error) {

            toast.error('💣 Falha no Sistema! Tente novamente ...')

        };

    }

    return (

        <Conteiner>
            <LeftConteiner>
                <img src={Logo} alt="Logo DevClub" />
            </LeftConteiner>

            <RightConteiner>
                <Title>Nova Conta</Title>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputConteiner>
                        <label>Nome</label>
                        <input type="text" {...register("name")} />
                        <p>{errors?.name?.message}</p>
                    </InputConteiner>

                    <InputConteiner>
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputConteiner>

                    <InputConteiner>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputConteiner>

                    <InputConteiner>
                        <label>Confirme sua Senha</label>
                        <input type="password" {...register("confirmPassword")} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputConteiner>

                    <DefaultButton type="submit">Criar Conta</DefaultButton>

                </Form>

                <Paragraph>Já possui conta? <Link to="/login"> Clique Aqui</Link>!</Paragraph>

            </RightConteiner>

        </Conteiner>
    )
}