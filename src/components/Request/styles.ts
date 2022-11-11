import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 72px;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 16px;
    position: relative;
    transition: 0.2s;

    :hover {
      background-color: ${({ theme }) => theme.background};
    }
    .img-request {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      svg {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .txt {
      color: ${({ theme }) => theme.txt};
      margin-left: 15px;
    }
    .option {
      position: absolute;
      right: 16px;
      display: flex;
      align-items: center;
      gap: 10px;
      div {
        cursor: pointer;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${({ theme }) => theme.txt};
        font-size: 1.3rem;
        transition: 0.2s;
      }

      .accept {
        background-color: #32b368;
        :hover {
          background-color: #65cf91;
        }
      }

      .refuse {
        background-color: red;
        :hover {
          background-color: #c75858;
        }
      }
    }
  }

  @keyframes left {
    0% {
      transform: translateX(0px);
      display: flex;
    }
    100% {
      transform: translateX(-100%);
      display: none;
    }
  }

  .accepted {
    animation: left 0.5s forwards;
  }
`;
