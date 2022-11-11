import chatImge from "../../assets/newchat.png";
import { useModal } from "../../contexts/modalContext";
import { useUser } from "../../contexts/userContext";
import { BiLogOut } from "react-icons/bi";
import { Container } from "./styles";
import { useEffect, useMemo, useRef, useState } from "react";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-avataaars-sprites";

export function Profile() {
  const { modalAddUser, modalConfirm } = useModal();
  const { values, setValue } = useUser();
  const [confirm, setConfirm] = useState(false);
  const img = useRef<HTMLDivElement | null>(null);

  const openModal = () => {
    modalConfirm.setConfig({
      title: "Logout",
      description: "Are you sure you want to logout?",
      setConfirm,
    });
    modalConfirm.setValue(true);
  };
  useMemo(() => {
    if (!confirm) {
      return;
    }
    modalConfirm.setValue(false);

    var userData = { ...values };
    userData.avatar = "";
    userData.friendRequests = [];
    userData.friendsId = [];
    userData.id = "";
    userData.token = "";
    setValue({ values: userData });
    localStorage.removeItem("token");
  }, [confirm]);

  useEffect(() => {
    if (img.current) {
      img.current.innerHTML = "";
      let svg = createAvatar(style, {
        seed: values.avatar,
        background: "gray",
      });
      img.current.innerHTML = svg;
    }
  }, []);
  return (
    <Container>
      <div className="avatar">
        <div ref={img} className="img-profile"></div>
      </div>
      <div className="options">
        <div
          className="option"
          onClick={() => {
            modalAddUser.setValue(true);
          }}
        >
          <img src={chatImge} alt="add" />
        </div>
        <div className="option" onClick={openModal}>
          <BiLogOut />
        </div>
      </div>
    </Container>
  );
}
