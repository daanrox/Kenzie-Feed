import styled from 'styled-components'
export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    height: 6rem;
`
export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 2.75rem;
`
export const StyledLogo = styled.img`
    height: 1.9375rem;
`
export const HeaderUserDiv = styled.div`
    display: flex;
    align-items: center;
    gap: .75rem;
    height: 2.6875rem;

    .material-symbols-outlined{
        width: 2.5rem;
    }
`
export const StyledUserDiv = styled.div`
    background-color: var(--color-blue);
    width: 2.6875rem;
    height: 2.6875rem;
    border-radius: 1.5625rem;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const StyledUserIcon = styled.p`
    color: var(--color-white);
    font-size: .875rem;
    font-weight: 700;
    font-family: var(--font-inter);
`