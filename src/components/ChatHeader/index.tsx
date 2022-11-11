import { Container } from "./styles";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useChat } from "../../contexts/chatContext";
import { useEffect, useMemo, useRef } from "react";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-avataaars-sprites";

export function ChatHeader() {
  const currentChat = useChat();
  const div = useRef<HTMLDivElement | null>(null);
  const img = useRef<HTMLDivElement | null>(null);
  const handleBack = () => {
    currentChat.setCurrentFriend("");
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (!div.current) {
        return;
      }
      if (window.innerWidth <= 900) {
        div.current.style.display = "flex";
      } else {
        div.current.style.display = "none";
      }
    });
  }, []);

  useEffect(() => {
    if (img.current) {
      img.current.innerHTML = "";
      let svg = createAvatar(style, {
        seed: currentChat.selected.avatar,
        background: "gray",
      });
      img.current.innerHTML = svg;
    }
  }, [currentChat]);
  return (
    <Container>
      <div className="left" onClick={handleBack}>
        {window.innerWidth <= 900 && (
          <div className="back" ref={div}>
            <IoIosArrowRoundBack />
          </div>
        )}
        <div ref={img} className="img-header"></div>
        <h3>{currentChat.selected.username}</h3>
      </div>
    </Container>
  );
}
