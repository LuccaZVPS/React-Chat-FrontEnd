import { useEffect, useRef, useState } from "react";
import { useModal } from "../../contexts/modalContext";
import { Background } from "../Background";
import { ModalConfirm } from "../ModalConfirm";
import { Container } from "./styles";
import { changeAvatar } from "../../requests/userRequests";
import { useUser } from "../../contexts/userContext";
import { toast } from "react-hot-toast";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-avataaars-sprites";

export function ChooseAvatar() {
  const [selectedIcon, setSelectedIcon] = useState<string>();
  const [confirm, setConfirm] = useState(false);
  const avatarContainer = useRef<HTMLDivElement>(null);
  const { modalConfirm } = useModal();
  const { values, setValue } = useUser();

  useEffect(() => {
    if (confirm && selectedIcon) {
      changeAvatar(selectedIcon, values.token)
        .then(() => {
          let newObject = values;
          newObject.avatar = selectedIcon;
          let newValues = {
            values: newObject,
          };
          modalConfirm.setValue(false);

          setValue(newValues);
        })
        .catch(() => {
          toast.error("Error while saving your avatar");
        });
    }
  }, [confirm]);

  const loadAvatars = () => {
    if (!avatarContainer.current) {
      return;
    }
    var divs = avatarContainer.current.querySelectorAll(
      "div"
    ) as NodeListOf<HTMLDivElement>;
    divs.forEach((div) => {
      let randomNumber = Math.floor(Math.random() * 10000).toString();
      let svg = createAvatar(style, {
        seed: randomNumber,
        background: "gray",
      });
      div.id = randomNumber;
      div.innerHTML = svg;
    });
  };

  useEffect(() => {
    if (!avatarContainer.current) {
      return;
    }
    avatarContainer.current.innerHTML = "";

    for (let index = 0; index <= 15; index++) {
      var div = document.createElement("div");
      div.addEventListener("click", (e) => {
        selectAvatar(e as unknown as React.MouseEvent<HTMLDivElement>);
      });
      avatarContainer.current.append(div);
    }
    loadAvatars();
  }, []);
  const selectAvatar = (e: React.MouseEvent<HTMLDivElement>) => {
    removeBorder(e.currentTarget);
    e.currentTarget.style.border = "5px solid #63B3ED";
    modalConfirm.setConfig({
      description: "Are you sure you want to continue with this avatar?",
      title: "Confirm",
      setConfirm: setConfirm,
    });
    modalConfirm.setValue(true);
    setSelectedIcon(e.currentTarget.id);
  };
  const removeBorder = (div: HTMLDivElement) => {
    const allDivs = div.parentElement?.querySelectorAll("div");
    allDivs?.forEach((div) => {
      div.style.border = "none";
    });
  };
  return (
    <Background>
      <Container>
        <h3>Choose your avatar</h3>
        <div className="avatars-container" ref={avatarContainer}></div>
        <div className="btns-avts">
          <button onClick={loadAvatars}>Load More</button>
        </div>
      </Container>
      {modalConfirm.value && <ModalConfirm />}
    </Background>
  );
}
