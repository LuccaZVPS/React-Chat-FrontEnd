import { ReactNode, useMemo } from "react";
import { Toaster } from "react-hot-toast";
import { Container } from "./styles";
interface props {
  children: ReactNode;
}
export function Background({ children }: props) {
  return (
    <Container>
      <Toaster />
      {children}
    </Container>
  );
}
