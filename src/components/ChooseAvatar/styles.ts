import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  background-color: ${({ theme }) => theme.secundary};
  border-radius: 8px;
  padding: 20px 10px 20px 10px;
  margin: 5px;
  h3 {
    color: ${({ theme }) => theme.txt};
    font-size: 1.5rem;
    margin-bottom: 30px;
    margin-left: 20px;
  }
  .avatars-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 15px;
    justify-items: center;
    div {
      width: 70%;
      cursor: pointer;
      border-radius: 50%;
      svg {
        width: 100%;
        border-radius: 50%;
      }
    }
  }

  .btns-avts {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    button {
      border-radius: 8px;
      outline: none;
      border: none;
      border-radius: 8px;
      background-color: ${({ theme }) => theme.coloredDark};
      width: 120px;
      height: 45px;
      font-weight: bold;
      color: ${({ theme }) => theme.txt};
      cursor: pointer;
      transition: 0.2s;
      :hover{
        background-color: ${({ theme }) => theme.colored};
      }
    }
  }

  @media (max-width: 900px) {
    h3 {
      font-size: 1.2rem;
    }
    .avatars-container {
      div {
        height: 65px;
      }
    }

    .btns-avts {
      button {
        width: 90px;
        height: 38px;
        font-size: 0.75rem;
      }
    }
  }

  @media (max-width: 350px) {
    padding: 20px 5px 20px 5px;
    h3 {
      margin-bottom: 30px;
      margin-left: 10px;
    }

    .avatars-container {
      div {
        width: 55px;
        height: 55px;
      }
    }
    .btns-avts {
      button {
        width: 85px;
        height: 35px;
      }
    }
  }
`;
