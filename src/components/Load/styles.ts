import styled from "styled-components";

export const Container = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: solid 3px transparent;
  border-bottom: solid 3px ${({ theme }) => theme.txt};
  border-right: solid 3px ${({ theme }) => theme.txt};
  animation: rotate 0.5s linear infinite;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
