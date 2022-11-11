import { Container } from "./styles";
import { AiOutlineSend } from "react-icons/ai";
import { FormEvent, useRef, useState } from "react";
import { addMessage } from "../../requests/messageRequests";
import { useUser } from "../../contexts/userContext";
import { useChat } from "../../contexts/chatContext";
import { useSocket } from "../../contexts/socketContext";
export function ChatInput() {
  const user = useUser();
  const { selected, add } = useChat();
  const [message, setMessage] = useState("");
  const socket = useSocket();
  const input = useRef<null | HTMLInputElement>(null);
  const handleAddMessage = (e: FormEvent) => {
    e.preventDefault();
    if (message.length < 1) {
      return;
    }

    addMessage(user.values.token, selected._id, message)
      .then((r) => {
        add(r);
        socket.messageSent(r._id);
      })
      .finally(() => {
        setMessage("");
        if (input.current) {
          input.current.value = "";
        }
      });
  };
  return (
    <Container>
      <form action="" onSubmit={handleAddMessage}>
        <input
          ref={input}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          type="text"
          placeholder="Type something"
        />
        <button type="submit">
          <AiOutlineSend />
        </button>
      </form>
    </Container>
  );
}
