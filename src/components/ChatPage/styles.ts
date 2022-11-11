import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  overflow: hidden;
  .slider-container {
    width: 100vw;
    display: flex;
    transition: 0.2s;

    .left {
      width: 350px;
    }
    .right {
      width: 100%;
    }

    .right {
      width: 100vw;
    }

    @media (max-width: 900px) {
      width: 200vw;
      .left {
        width: 100vw;
      }
      .right {
        width: 100vw;
      }
    }
  }

  @media (max-width: 900px) {
    height: auto;
    min-height: 100vh;
    overflow-x: hidden;
  }
`;
