import styled, { css } from 'styled-components'

interface iButtonStylesProps{
    buttonheight: 'sm' | 'md' | 'lg';
    buttonstyle: 'solid' | 'outline' | 'cardIcon' | 'logoutIcon';
}

export const ButtonStyles = css<iButtonStylesProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    font-weight: 700;
    gap:0.5rem;
    transition: 0.3s;

    ${({ buttonheight }) => {
        switch (buttonheight) {
            case 'lg':
                return css`
                    height: 4rem;
                    width: 10.375rem;
                    font-size: 1.125rem;
                    @media (max-width: 768px) {
                        height: 3.7rem;
                    }
                `;

            case 'md':
                return css`
                    height: 3.375rem;
                    width: 9.0625rem;
                    font-size: 0.875rem;
                    @media (max-width: 768px) {
                        height: 3rem;
                    }
                `;

            case 'sm':
                return css`
                    height: 2.6875rem;
                    width: 7rem;
                    font-size: 0.875rem;
                    @media (max-width: 768px) {
                        height: 2.375rem;
                    }
                `;
        }
  }}

    ${({ buttonstyle }) => {
        switch (buttonstyle) {
            case 'solid':
                return css`
                    background: var(--color-blue);
                    border: 1px solid var(--color-blue);
                    color: var(--color-white);

                    &:hover {
                        background: #0096FF;
                        border: 1px solid #0096FF;
                    }
                    `;

            case 'outline':
                return css`
                    background: var(--color-white);
                    border: 1px solid var(--color-blue);
                    color: var(--color-blue);

                    &:hover {
                        background: var(--color-blue);
                        border: 1px solid var(--color-blue);
                        color: var(--color-white);
                    }
                `;

            case 'cardIcon':
                return css`
                    background: transparent;
                    border: 1px transparent;
                    color: var(--color-blue);

                    &:hover {
                        box-shadow: 0px 0px 5px 0px;
                    }
                `;

            case 'logoutIcon':
                return css`
                    background: transparent;
                    border: 1px transparent;
                    color: var(--color-black);

                    &:hover {
                        box-shadow: 0px 0px 5px 0px;
                    }
                `;
        }
    }}
`;

export const StyledButton = styled.button<iButtonStylesProps>`
  ${ButtonStyles};
`;

export const StyledLink = styled.span<iButtonStylesProps>`
    ${ButtonStyles};
    a{
        ${ButtonStyles};
    }
`;