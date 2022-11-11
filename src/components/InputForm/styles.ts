import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.secundary};
  border-radius: 7px;
  gap: 5px;
  input {
    width: 100%;
    height: 40px;
    border: none;
    background: transparent;
    outline: none;
    padding-left: 5px;
    color: ${({ theme }) => theme.txt};
    font-size: 1.1rem;
  }
  .eye {
    display: flex;
    align-items: center;
    position: absolute;
    right: 10px;
    cursor: pointer;
    color: ${({ theme }) => theme.txt};
    svg {
      font-size: 1.5rem;
    }
  }
  .icon {
    padding-left: 15px;
    display: flex;
    align-items: center;
    svg {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.txt};
    }
  }
  .error {
    position: absolute;
    color: #a83131;
    font-weight: bold;
    right: 0;
    top: -20px;
  }

  @media (max-width: 500px) {
    .error {
      font-size: 0.9rem;
    }

    .eye {
      svg {
        font-size: 1.3rem;
      }
    }
  }
`;
