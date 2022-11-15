import { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Form } from "./styles";

import imageSignIn from '../../images/imageSignIn.svg';

import { Input } from "../../components/Input";
import { Button } from '../../components/Button';

export function SignIn() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = {
            email,
            senha
        }

        console.log(data);
    }

    return (
        <Container>
            <Content>
                <img src={imageSignIn} alt="" />

                <Form onSubmit={handleSubmit}>
                    <Input
                        label="Email"
                        placeholder="Digite seu e-mail"
                        IconImage={FiMail}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                    />
                    <Input
                        label="Senha"
                        placeholder="*********"
                        IconImage={FiLock}
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        type="password"
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