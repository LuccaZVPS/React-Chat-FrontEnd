import styled from "styled-components";
interface props {
  position: string;
}
export const Container = styled.div<props>`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;
  flex-flow: column;
  border-right: 1px solid gray;
  .top-side {
    position: relative;
    width: 100%;
    margin-bottom: 20px;
    ::after {
      margin-top: 20px;
      position: absolute;
      content: "";
      background-color: gray;
      width: 100%;
      height: 1px;
    }
  }
  .list {
    width: 100%;
    flex-grow: 1;
    overflow: hidden;
    .slider {
      display: flex;
      width: 700px;
      height: 100%;
      transition: 0.2s;
      margin-left: ${({ position }) => (position === "true" ? "-100%" : "0")};
    }
  }

  @media (max-width: 900px) {
    .list {
      overflow: visible;
      background-color: ${({ theme }) => theme.primary};
      overflow-x: hidden;
      .slider {
        display: flex;
        width: 200vw;
        height: fit-content;
        transition: 0.2s;
        margin-left: ${({ position }) =>
          position === "false" ? "0%" : "-100%"};
      }
    }
  }
`;
