import { useMemo, useRef,useEffect } from "react";
import { useChat } from "../../contexts/chatContext";
import { useModal } from "../../contexts/modalContext";
import { useRequests } from "../../contexts/requestContext";
import { LeftSide } from "../LeftSide";
import { ModalAddUser } from "../ModalAddUser";
import { ModalConfirm } from "../ModalConfirm";
import { RightSide } from "../RightSide";
import { Container } from "./styles";

export function ChatPage() {
  const { modalAddUser, modalConfirm } = useModal();
  const divSlider = useRef<HTMLDivElement | null>(null);
  const currentChat = useChat();
  useMemo(() => {
    if (window.innerWidth <= 900 && divSlider.current) {
      if (!currentChat.current) {
        divSlider.current.style.marginLeft = "0";
      } else {
        divSlider.current.style.marginLeft = "-100vw";
      }
    }
  }, [currentChat.current]);
  useEffect(() => {
    window.addEventListener("resize", () => {
      currentChat.setCurrentFriend("");
      if (!divSlider.current) {
        return;
      }
      if(window.innerWidth >= 900){
     
            divSlider.current.style.marginLeft = "0";
      }

    });
  }, []);

  return (
    <Container>
      <div className="slider-container" ref={divSlider}>
        <div className="left">
          <LeftSide />
        </div>
        {currentChat.selected._id && (
          <div className="right">
            <RightSide />
          </div>
        )}

        {modalAddUser.value && <ModalAddUser />}
        {modalConfirm.value && <ModalConfirm />}
      </div>
    </Container>
  );
}
