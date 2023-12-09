import styled from "styled-components";
import { label } from "../../styles/Typography";

export const StyledBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--color-gray);    

    label{
        ${label}
        font-size: 1rem;
    }

    input, textarea{
        background-color: var(--color-white);
        color: var(--color-black);
        font-size: 1.313rem;
        font-weight: 400;
        line-height: 2.125rem;
        padding: 1.25rem 2.188rem ;
    }

    input{
        height: 4rem;
    }

    textarea{
        height: fit-content;
        resize: none;
    }
`