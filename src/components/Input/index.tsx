import { Container, InputBox } from "./styles";

interface InputProps {
    label: string;
    placeholder: string;
    IconImage?: any;
}

export function Input({ label, placeholder, IconImage }: InputProps) {
    return (
        <Container>
            <label>{label}</label>
            <InputBox>
                {IconImage && <IconImage size={20} color="#7F8C8D" />}
                <input type="text" placeholder={placeholder} />
            </InputBox>
        </Container>
    )
}