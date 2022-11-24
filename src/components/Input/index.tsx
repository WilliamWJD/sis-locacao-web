import React, { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons';

import { Container, InputBox } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    IconImage?: React.ComponentType<IconBaseProps>;
    error?: string
}

const InputComponent: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (({ label, IconImage, error, ...rest }, ref) => {
    return (
        <Container>
            <label className='label-title-input'>{label}</label>
            <InputBox>
                {IconImage && <IconImage size={20} color="#7F8C8D" />}
                <input ref={ref} {...rest} />
            </InputBox>
            {error && (
                <label className='label-error'>{error}</label>
            )}
        </Container >
    )
})

export const Input = forwardRef(InputComponent);