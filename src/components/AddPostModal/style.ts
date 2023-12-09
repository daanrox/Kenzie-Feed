import styled from 'styled-components';
import { titleTwo, titleTwoMobile } from '../../styles/Typography';

export const StyledTitleTwo = styled.h2`
    ${titleTwo};
    color: var(--color-black);
    margin-top: -2rem;

    @media (max-width: 768px){
        ${titleTwoMobile};
    }
`

export const ModalContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.94rem;

    & .close{
        align-self: flex-end;
        font-size: 1.5rem;
        font-weight: 500;
        color: grey;
        width: auto;
        padding-inline: 1rem;
        margin-right: -2.7rem;
        margin-top: 0.5rem;
    }
`