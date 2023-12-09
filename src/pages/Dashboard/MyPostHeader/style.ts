import styled from 'styled-components';
import { titleThree } from '../../../styles/Typography';


export const StyledMyPostHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap-reverse;
    gap: 1rem;
    margin: 1rem 0;

    &>button{
        width: 146px;
    }
`

export const StyledTitleHeader = styled.h3`
    ${titleThree}
`