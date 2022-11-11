import { ReactNode } from "react";

import { Container } from "./styles";
import { Toaster } from "react-hot-toast";

interface ModalContainerProps {
  children: ReactNode;
}

export function ModalContainer({ children }: ModalContainerProps) {
  return (
    <Container>
      <Toaster />
      {children}
    </Container>
  );
}
