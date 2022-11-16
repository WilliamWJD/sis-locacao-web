import { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, InputBox } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    IconImage?: React.ComponentType<IconBaseProps>;
}

export function Input({ label, IconImage, ...rest }: InputProps) {

    return (
        <Container>
            <label>{label}</label>
            <InputBox>
                {IconImage && <IconImage size={20} color="#7F8C8D" />}
                <input {...rest} />
            </InputBox>
        </Container>
    )
}