import styled, { css } from 'styled-components';

interface InputStyleProps{
    borderColor?: 'transparent';
}

export const InputStyles = css`
    display: flex;
    flex-direction: column;
    gap: 0.63rem;
    width: 100%;

    label{
        color: var(--color-black);
        font-size: 1rem;
        font-family: var(--font-lora);
        font-weight: 700;
    }

    input{
        width: 100%;
        font-weight: 500;
        font-family: var(--font-inter);
        color: var(--color-black);
        border-radius: 0.15rem;
        &::placeholder{
            font-family: var(--font-inter);
            font-weight: 400;
            color: var(--color-input);
        }
    }

    p{
        font-size: 0.875rem;
        font-weight: 500;
        font-family: var(--font-lora);
        color: red;
    }

`

export const InputDefault = styled.div `
    ${InputStyles}
    input{
        max-width: 23.125rem;
        padding-inline: 1.5rem;
        padding-top: 1.15rem;
        padding-bottom: 1.15rem;
        height: 3.5rem;
        border: 1px solid var(--color-input);
        font-size: 1.0625rem;

        &::placeholder{
            font-size: 1.0625rem;
        }
    }
`

export const BigInput = styled.div<InputStyleProps> `
    ${InputStyles}
    input{
        max-width: 108rem;
        padding-inline: 1.94rem;
        padding-top: 1.29rem;
        padding-bottom: 1.15rem;
        height: 4rem;
        border: 1px ${({ borderColor }) => borderColor === undefined ? borderColor : "solid var(--color-input)"};
        font-size: 1.3125rem;

        &::placeholder{
            font-size: 1.3125rem;
        }
    }
`