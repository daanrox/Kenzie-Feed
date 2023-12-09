import styled from 'styled-components'
import { titleTwo } from '../../styles/Typography'

export const StyledRegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const RegisterFormTitle = styled.h2`
    ${titleTwo}
`

export const RegisterFormParagraph = styled.p`
    font-size: 1.0625rem;
    font-weight: 400;
    
    margin-top: 2.1875rem;
    margin-bottom: 2.5625rem;
`

export const InputDivRegister = styled.div`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: .6875rem;

    div{
        max-width: 23.125rem;
    }

    margin-bottom: 1.375rem;
`

export const InputTextRegister = styled.input`
    border: 1px solid black;

    width: 23.125rem;
    height: 3.5rem;
`

export const StyledRegisterButton = styled.div`
    width: 100%;

    display: flex;
    justify-content: end;
`