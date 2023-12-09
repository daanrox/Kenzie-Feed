import styled from "styled-components";
import { titleTwo } from "../../../styles/Typography";

export const StyledEditPostHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap-reverse;
    gap: 1rem;
    margin-top: 2rem;

    h2{
        ${titleTwo}
        word-break: break-word;
    }

    button{
        background-color: transparent;
        margin-left: auto;
    }
`