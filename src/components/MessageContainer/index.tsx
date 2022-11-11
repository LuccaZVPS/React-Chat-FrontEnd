import { useEffect, useMemo, useRef, useState } from "react";
import { message, messages, useChat } from "../../contexts/chatContext";
import { useFriends } from "../../contexts/friendsContext";
import { Message } from "../Message";
import { Container } from "./styles";

export function MessageContainer() {
  const container = useRef<HTMLDivElement | null>(null);
  const { selected } = useChat();
  const [message, setMessage] = useState<messages>({} as messages);
  useMemo(() => {
    if (selected.messages) {
      setMessage(selected.messages);
    }
  }, [selected.messages?.message]);

  useEffect(() => {
    if (container.current) {
      container.current.scrollTop = container.current.scrollHeight;
    }
  });

  return (
    <Container ref={container}>
      <div className="messages">
        {message.message?.map((msg) => (
          <Message key={msg._id} message={msg} />
        ))}
      </div>
    </Container>
  );
}
