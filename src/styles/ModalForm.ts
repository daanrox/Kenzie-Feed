import styled from 'styled-components';

export const StyledModalForm = styled.form`
    width: 100%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    gap: 1.19rem;

    input{
        max-width: 100%;
    }

    button{
        margin-top: 0.18rem;
        align-self: flex-end;
    }

    textarea{
        height: fit-content;
        resize: none;
        background-color: var(--color-white);
        font-size: 1.0625rem;
        font-weight: 400;
        line-height: 2.125rem;
        padding-inline: 1.5rem;
        padding-top: 1.15rem;
        padding-bottom: 1.15rem;
        border: 1px solid var(--color-input);

        &::placeholder{
            color: var(--color-input);
        }
    }
`