import { ChatHeader } from "../ChatHeader";
import { MessageContainer } from "../MessageContainer";
import { Container } from "./styles";
import { ChatInput } from "../ChatInput";
export function RightSide() {
  return (
    <Container>
      <ChatHeader />
      <MessageContainer />
      <ChatInput />
    </Container>
  );
}
