import styled from 'styled-components';

export const StyledMyPostList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;

  overflow-y: auto;

  .my-post__empty{
    display: flex;
    justify-content: center;
    margin: 8rem 0;
    font-size: 2rem;
    opacity: 0.8;
}
`