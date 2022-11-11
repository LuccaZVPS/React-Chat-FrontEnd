import styled from "styled-components";

export const Container = styled.div`
  padding-left: 16px;
  height: 84px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .avatar {
    width: 50px;
    height: 50px;
    .img-profile {
      border-radius: 50%;
      width: 50px;
      height: 50px;
      svg {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
  .options {
    display: flex;
    align-items: center;
    gap: 5px;
    .option {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      cursor: pointer;
      svg {
        color: white;
        width: 25px;
        height: 25px;
        transform: rotate(180deg);
      }
      :hover {
        background-color: ${({ theme }) => theme.secundary};
      }
    }
  }
`;
