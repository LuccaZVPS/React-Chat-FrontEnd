import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 72px;
  transition: 0.2s;
  display: flex;
  align-items: center;
  padding-left: 16px;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.background};
  }
  .img-friend {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    svg {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .txt {
    display: flex;
    flex-direction: column;
    gap: 1px;
    color: ${({ theme }) => theme.txt};
    margin-left: 15px;
    .status {
      font-size: 0.85rem;
    }
  }
`;
