import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100%;
  position: absolute;
  background-color: rgba(28, 29, 34, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: show 0.3s;
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
