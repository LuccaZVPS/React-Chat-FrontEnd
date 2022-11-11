import { ReactNode, useEffect, useRef } from "react";
import { useChat } from "../../contexts/chatContext";
import { Container } from "./styles";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-avataaars-sprites";

interface FriendProps {
  username: ReactNode;
  avatar: string;
  id: string;
}

export function Friend({ avatar, id, username }: FriendProps) {
  const currentChat = useChat();
  const img = useRef<HTMLDivElement | null>(null);

  const selectFriend = () => {
    currentChat.setCurrentFriend(id);
  };
  useEffect(() => {
    if (img.current) {
      img.current.innerHTML = "";
      let svg = createAvatar(style, {
        seed: avatar,
        background: "gray",
      });
      img.current.innerHTML = svg;
    }
  }, []);
  return (
    <Container onClick={selectFriend}>
      <div ref={img} className="img-friend"></div>
      <div className="txt">
        <h3>{username}</h3>
      </div>
    </Container>
  );
}
