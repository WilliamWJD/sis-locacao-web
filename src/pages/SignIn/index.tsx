import { FiMail, FiLock } from 'react-icons/fi';

import { Container, Content, Form, InputGroup, InputBox } from "./styles";

import imageSignIn from '../../images/imageSignIn.svg';

export function SignIn() {
    return (
        <Container>
            <Content>
                <img src={imageSignIn} alt="" />

                <Form>
                    <InputGroup>
                        <label>E-mail</label>
                        <InputBox>
                            <FiMail size={20} color="#7F8C8D" />
                            <input type="text" placeholder="Dígite seu e-mail" />
                        </InputBox>
                    </InputGroup>
                    <InputGroup>
                        <label>Senha</label>
                        <InputBox>
                            <FiLock size={20} color="#7F8C8D" />
                            <input type="password" placeholder="**********" />
                        </InputBox>
                    </InputGroup>

                    <button>Entrar</button>
                    <a href="">Cadastre-se</a>
                </Form>

            </Content>
        </Container>
    )
}