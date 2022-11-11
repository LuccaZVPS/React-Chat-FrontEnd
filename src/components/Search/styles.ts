import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 16px 0 16px;

  form {
    padding-right: 12px;

    width: 100%;
    background-color: ${({ theme }) => theme.secundary};
    border-radius: 8px;
    height: 40px;
    display: flex;
    align-items: center;
    input {
      width: 90%;
      background: transparent;
      outline: none;
      border: none;
      padding-left: 12px;
      color: #ffffff;
    }
    img {
      cursor: pointer;
    }
  }

  @media (max-width: 900px) {
    form {
      input {
        width: 95%;
      }
    }
  }
`;
