import { ReactNode } from "react";
import { message } from "../../contexts/chatContext";
import { useUser } from "../../contexts/userContext";

import { Container } from "./styles";

interface MessageProps {
  message: message;
}

export function Message({ message }: MessageProps) {
  const user = useUser();
  return (
    <Container direction={message.sender === user.values.id ? "true" : "false"}>
      <div className="msg-content">{message.message}</div>
    </Container>
  );
}
