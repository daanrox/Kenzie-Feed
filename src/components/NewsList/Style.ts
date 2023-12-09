import styled from 'styled-components'

export const StyledNewList = styled.ul`
    display: flex;
    flex-wrap: wrap;

    gap: clamp(3rem, 100%, 10%);    

    justify-content: center;
    align-items: space-between;

    height: fit-content;
    width: 100%;
`