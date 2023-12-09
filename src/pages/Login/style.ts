import styled from 'styled-components'
import { titleTwo } from '../../styles/Typography'

export const StyledLoginDiv = styled.div`
    display: flex;
    align-items: center;

    margin-top: 3rem;
`
export const StyledLoginImg = styled.img`
    width: clamp(15rem, 40vw, 36.25rem);
    @media (max-width:768px){
        display: none;
    }
`

export const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    a{
        text-decoration: underline;
        font-size: 17px;
        font-weight: 400;
    }
`

export const LoginFormTitle = styled.h2`
    text-align: center;
    ${titleTwo}

`

export const LoginFormParagraph = styled.p`
    font-size: 1.0625rem;
    font-weight: 400;
    
    margin-top: 2rem;
    margin-bottom: 2.375rem;

    text-align: center;
`

export const InputTextLogin = styled.input`
    border: 1px solid black;
`

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75rem;

    margin-bottom: 1.375rem;
`