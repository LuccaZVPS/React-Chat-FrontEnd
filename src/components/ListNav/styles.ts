import styled from "styled-components";
interface props {
  display: string;
}
export const Container = styled.div<props>`
  width: 100%;
  .nav {
    width: 100%;
    padding: 16px;
    display: flex;
    gap: 5px;
    .option {
      background-color: ${({ theme }) => theme.secundary};
      width: 50%;
      height: 40px;
      border-radius: 8px;
      cursor: pointer;
      color: ${({ theme }) => theme.txt};
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
    }
    .a {
      background-color: ${({ theme, display }) =>
        display === "true" ? theme.secundary : theme.background};
    }
    .b {
      position: relative;

      .number-ball {
        position: absolute;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.coloredDark};
        right: 0px;
        bottom: -5px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      background-color: ${({ theme, display }) =>
        display === "true" ? theme.background : theme.secundary};
    }
  }
`;
