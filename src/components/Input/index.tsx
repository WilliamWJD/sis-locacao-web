import React, { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons';

import { Container, InputBox } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    IconImage?: React.ComponentType<IconBaseProps>;
}

const InputComponent: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (({ label, IconImage, ...rest }, ref) => {
    return (
        <Container>
            <label>{label}</label>
            <InputBox>
                {IconImage && <IconImage size={20} color="#7F8C8D" />}
                <input ref={ref} {...rest} />
            </InputBox>
        </Container >
    )
})

export const Input = forwardRef(InputComponent);