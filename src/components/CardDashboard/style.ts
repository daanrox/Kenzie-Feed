import styled from "styled-components";
import { titleThree } from "../../styles/Typography";

export const StyledCardDashboard = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  overflow-x: hidden;
  
  div {
    flex-wrap: wrap;
    display: flex;
    gap: 1.5rem;
    align-items: center;
}

  .card-dashboard__post-title {
    max-width: 35rem;
    min-width: 15rem;
    gap: 2.5rem;
    
    p {
      ${titleThree}
    }
  }

  .card-dashboard__post-banner {
    width: 9.563rem;
    min-width: 9.563rem;
    max-width: 9.563rem;
    height: 8.625rem;
    overflow: hidden;
    border-radius: 25px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }


  .material-symbols-outlined {
        font-size: 2.225rem;
        color: var(--color-blue);
        transition: 0.5s;
    }

    .material-symbols-outlined:hover{
        cursor: pointer;
        transform: scale(1.1);

    }
`