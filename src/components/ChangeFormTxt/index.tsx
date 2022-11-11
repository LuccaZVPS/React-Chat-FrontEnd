import { Dispatch, ReactNode, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";
interface props {
  txt: string;
  txtLink: string;
  route: string;
}
export function ChangeFormTxt({ txt, txtLink, route }: props) {
  const changeRouter = useNavigate();
  const handleClick = () => {
    changeRouter(route);
  };
  return (
    <Container>
      {txt} <span onClick={handleClick}>{txtLink}</span>
    </Container>
  );
}
