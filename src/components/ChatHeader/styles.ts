import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  padding-left: 24px;
  padding-right: 24px;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;
    align-items: center;
    color: ${({ theme }) => theme.txt};
    height: 100%;
    gap: 20px;
    .img-header {
      width: 50px;
      height: 50px;
      svg {
        width: 100%;
        border-radius: 50%;
      }
    }
    .back {
      display: flex;
      align-items: center;
      font-size: 2rem;
    }
  }

  @media (max-width: 900px) {
    padding-left: 10px;
    padding-right: 10px;
    height: 60px;
    .left {
      gap: 10px;
      h3 {
        font-size: 1rem;
      }
      .img-header {
        width: 40px;
        height: 40px;
      }
    }
  }
`;
