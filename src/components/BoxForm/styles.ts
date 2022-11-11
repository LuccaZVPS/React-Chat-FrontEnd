import styled from "styled-components";

export const Container = styled.div`
  width: 450px;
  padding: 30px 20px 30px 20px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  h3 {
    color: ${({ theme }) => theme.txt};
    font-size: 1.6rem;
  }
  @media (max-width: 500px) {
    min-height: 100vh;
    justify-content: center;
    width: 100%;
    padding: 30px 10px 30px 10px;
  }
`;
