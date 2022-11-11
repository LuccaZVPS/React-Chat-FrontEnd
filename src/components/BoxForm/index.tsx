import { ReactNode } from "react";

import { Container } from "./styles";

interface BoxFormProps {
  children: ReactNode;
  title: string;
}

export function BoxForm({ children, title }: BoxFormProps) {
  return (
    <Container>
      <h3>{title}</h3>
      {children}
    </Container>
  );
}
