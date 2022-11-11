import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .btns-form {
      width: 100%;
      display: flex;
      flex-direction: column;
      .check {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: left;
        color: ${({ theme }) => theme.txt};
        margin-top: -15px;
        margin-bottom: 10px;
        gap: 5px;
        padding-left: 3px;
      }
      button {
        height: 40px;
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 7px;
        font-weight: bold;
        font-size: 1.03rem;
        background-color: ${({ theme }) => theme.colored};
        transition: 0.2s;
        :hover{
          background-color: ${({ theme }) => theme.coloredDark};

        }
      }
    }
  }
`;
