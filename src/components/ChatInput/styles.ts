import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  align-items: center;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    input {
      color: ${({ theme }) => theme.txt};
      background: ${({ theme }) => theme.secundary};
      border: none;
      outline: none;
      height: 45px;
      padding-left: 16px;
      border-radius: 8px;
      font-size: 1.1rem;
      width: 100%;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    button {
      width: 45px;
      height: 45px;
      background: ${({ theme }) => theme.secundary};
      border: none;
      outline: none;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      color: ${({ theme }) => theme.txt};
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      svg {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 900px) {
    height: 60px;
    padding-left: 10px;
    padding-right: 10px;
    position: absolute;
    bottom: 0;
    form {
      input {
        height: 40px;
      }
      button {
        height: 40px;
      }
    }
  }
`;
