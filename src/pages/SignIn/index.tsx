import { FiMail, FiLock } from 'react-icons/fi';

import { Container, Content, Form } from "./styles";

import imageSignIn from '../../images/imageSignIn.svg';
import { Input } from "../../components/Input";
import { Button } from '../../components/Button';

export function SignIn() {
    return (
        <Container>
            <Content>
                <img src={imageSignIn} alt="" />

                <Form>
                    <Input
                        label="Email"
                        placeholder="Digite seu e-mail"
                        IconImage={FiMail}
                    />
                    <Input
                        label="Senha"
                        placeholder="*********"
                        IconImage={FiLock}
                    />

                    <Button
                        title="Entrar"
                    />

                    <a href="">Cadastre-se</a>
                </Form>

            </Content>
        </Container>
    )
}