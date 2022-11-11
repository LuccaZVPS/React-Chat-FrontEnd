import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 20px;
  .or {
    position: relative;
    color: ${({ theme }) => theme.txt};
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    ::after {
      content: "";
      position: absolute;
      background-color: ${({ theme }) => theme.txt};
      width: 80px;
      height: 0.08px;
      margin-left: -120px;
    }

    ::before {
      content: "";
      position: absolute;
      background-color: ${({ theme }) => theme.txt};
      width: 80px;
      height: 0.08px;
      margin-left: 120px;
    }
  }
  .btn-google {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
