import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.txt};
  font-weight: bold;
  gap: 5px;
  span {
    color: ${({ theme }) => theme.colored};
    cursor: pointer;
  }

  @media (max-width: 500px) {
    font-size: 0.85rem;
  }
`;
