import styled from 'styled-components'

import { label, paragraphMobile, titleOne, titleOneMobile } from '../../../styles/Typography'

export const StyledHomeSectionTop = styled.section`
    display: flex;
    flex-direction: column;

    margin: 2rem auto 0;

    width: 100%;

    text-align: center;

    gap: 1.5rem;

    .topImg{
        width: 100%;
        max-height: 384px;

        border-radius: 25px;
    }

    small{
        ${label}
    }

    h1{
        ${titleOneMobile}
    }

    p{
        ${paragraphMobile}
    }

    @media(min-width: 768px) {
        h1{
            ${titleOne}
        }
    }
`