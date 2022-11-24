import { FiMail, FiLock } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Container, Content, Form } from "./styles";
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import imageSignIn from '../../images/imageSignIn.svg';

import { Input } from "../../components/Input";
import { Button } from '../../components/Button';

const validationForm = yup.object({
    email: yup.string().email("Digite um e-mail válido").required("E-mail é obrigatório"),
    senha: yup.string().required("A senha é obrigatória").min(6, 'Mínimo de 6 digitos')
}).required();

interface FormData {
    email: string;
    senha: string;
}

export function SignIn() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(validationForm)
    });

    function onSubmit(data: FormData) {

    }

    function onError() {
        toast.error("Houve um erro ao tentar realizar login");
    }

    return (
        <Container>
            <Content>
                <img src={imageSignIn} alt="" />

                <Form onSubmit={handleSubmit(onSubmit, onError)}>
                    <Input
                        label="Email"
                        placeholder="Digite seu e-mail"
                        IconImage={FiMail}
                        type="email"
                        id="email"
                        error={errors.email?.message}
                        {...register("email")}
                    />
                    <Input
                        label="Senha"
                        placeholder="*********"
                        IconImage={FiLock}
                        type="password"
                        id="senha"
                        error={errors.senha?.message}
                        {...register("senha")}
                    />

                    <Button
                        title="Entrar"
                        type="submit"
                    />

                    <a href="">Cadastre-se</a>
                </Form>
            </Content>
        </Container>
    )
}