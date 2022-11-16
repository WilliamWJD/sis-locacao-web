import { FiMail, FiLock } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Container, Content, Form } from "./styles";

import imageSignIn from '../../images/imageSignIn.svg';

import { Input } from "../../components/Input";
import { Button } from '../../components/Button';
import { useRef } from 'react';

export function SignIn() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const formRef = useRef();

    function onSubmit(data: any) {
        console.log(data)
    }

    return (
        <Container>
            <Content>
                <img src={imageSignIn} alt="" />

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label="Email"
                        placeholder="Digite seu e-mail"
                        IconImage={FiMail}
                        type="email"
                        id="email"
                        {...register("email")}
                    />
                    <Input
                        label="Senha"
                        placeholder="*********"
                        IconImage={FiLock}
                        type="password"
                        id="senha"
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