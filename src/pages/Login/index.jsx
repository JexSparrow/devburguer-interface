import { Conteiner, Form, InputConteiner, LeftConteiner, Link, Paragraph, RightConteiner, Title } from './styles'
import { DefaultButton } from '../../components/Button/styles'
import Logo from '../../assets/Logo.svg'

import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'; // navegação dentro do js
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { toast } from 'react-toastify';

import { api } from '../../services/api';

import { useUser } from '../../hooks/userContext';



export function Login() {

    const navigate = useNavigate()

    const { putUserData } = useUser();

    const schema = yup.object({

        email: yup.string().email('Digite um email válido *').required('Este campo é obrigatório *'),
        password: yup.string().min(6, 'A senha deve ter no mínimo 6 caractéres *').required('Este campo é obrigatório *'),

    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {

        const { data: userData } = await toast.promise(


            api.post('/session', {
                email: data.email,
                password: data.password,
            }),

            {
                pending: 'Verificando seus Dados',
                success: {
                    render() {
                        setTimeout(() => {

                            if (userData?.admin) {
                                navigate('/admin/pedidos')
                            } else {
                                navigate('/')
                            }

                        }, 2000);
                        return 'Seja Bem-Vindo(a) 👌';
                    }

                },
                error: 'Email ou Senha Incorretos! 🤯'
            }


        );

        putUserData(userData);

    }

    return (

        <Conteiner>
            <LeftConteiner>
                <img src={Logo} alt="Logo DevClub" />
            </LeftConteiner>

            <RightConteiner>
                <Title>Olá, seja bem vindo ao <span>Dev Burguer </span>!
                    <br />
                    Acesse com seu <span>Login e senha </span>.
                </Title>

                <Form onSubmit={handleSubmit(onSubmit)}>
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

                    <DefaultButton type="submit">Entrar</DefaultButton>

                </Form>

                <Paragraph>Não possui conta? <Link to="/cadastro"> Clique Aqui</Link>!</Paragraph>

            </RightConteiner>

        </Conteiner>
    )
}