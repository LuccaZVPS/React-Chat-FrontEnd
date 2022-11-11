import styled from "styled-components";
interface props {
  direction: string;
}
export const Container = styled.div<props>`
  width: 100%;
  display: flex;

  justify-content: ${({ direction }) =>
    direction === "true" ? "right" : "left"};
  .msg-content {
    width: fit-content;
    padding: 10px 20px 10px 20px;

    border-radius: 8px;
    font-weight: bold;

    background-color: ${({ direction, theme }) =>
      direction === "true" ? theme.secundary : theme.coloredDark};
  }
`;
