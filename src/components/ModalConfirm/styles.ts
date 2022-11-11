import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  padding: 20px 15px 20px 15px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.txt};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin: 5px;
  .confirm-btn {
    display: flex;
    width: 100%;
    justify-content: right;
    gap: 10px;
    margin-top: 15px;
    button {
      border-radius: 8px;
      width: 60px;
      height: 30px;
      border: none;
      outline: none;
      cursor: pointer;
    }
    .yes {
      background-color: ${({ theme }) => theme.colored};
      transition: 0.2s;
      :hover {
        background-color: ${({ theme }) => theme.coloredDark};
      }
    }
    .no {
      transition: 0.2s;
      :hover {
        background-color: gray;
      }
    }
  }
`;
