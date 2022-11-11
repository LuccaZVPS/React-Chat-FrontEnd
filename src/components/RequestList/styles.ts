import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 97%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: gray;
  }

  ::-webkit-scrollbar-thumb {
    background: black;
  }
  @media (max-width: 900px) {
    width: 100vw;
  }
`;
