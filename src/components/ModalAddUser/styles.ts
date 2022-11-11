import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  padding: 15px 20px 25px 20px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 8px;
  color: ${({ theme }) => theme.txt};
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 0 10px ${({ theme }) => theme.secundary};
  position: relative;
  form {
    width: 100%;
    background-color: ${({ theme }) => theme.secundary};
    border-radius: 8px;
    position: relative;
    display: flex;
    align-items: center;
    input {
      color: ${({ theme }) => theme.txt};
      padding-left: 15px;
      height: 40px;
      background-color: transparent;
      outline: none;
      border: none;
      width: 90%;
      font-size: 1.05rem;
    }
    button {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      position: absolute;
      right: -3px;
      background-color: ${({ theme }) => theme.colored};
      cursor: pointer;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        color: white;
      }
    }
  }
  .close {
    position: absolute;
    right: 0;
    top: -30px;
    cursor: pointer;
    svg {
      font-size: 1.35rem;
    }
  }
`;
