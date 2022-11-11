import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 160px);
  .messages {
    width: 100%;
    overflow: auto;
    padding: 20px 30px 30px 30px;
    color: ${({ theme }) => theme.txt};
    display: flex;
    flex-direction: column-reverse;
    gap: 15px;
    justify-content: flex-end;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
  }
  .messages {
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: gray;
    }

    ::-webkit-scrollbar-thumb {
      background: black;
    }
  }
  @media (max-width: 900px) {
    height: calc(100% - 120px);
  }
`;
