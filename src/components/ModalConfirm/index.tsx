import { Dispatch, SetStateAction } from "react";
import { useModal } from "../../contexts/modalContext";
import { ModalContainer } from "../ModalContainer";
import { Container } from "./styles";

export function ModalConfirm() {
  const { modalConfirm } = useModal();
  return (
    <ModalContainer>
      <Container>
        <h3>{modalConfirm.config.title}</h3>
        <div>{modalConfirm.config.description}</div>
        <div className="confirm-btn">
          <button
            className="no"
            onClick={() => {
              modalConfirm.setValue(false);
            }}
          >
            No
          </button>
          <button
            className="yes"
            onClick={() => {
              modalConfirm.confirm();
            }}
          >
            Yes
          </button>
        </div>
      </Container>
    </ModalContainer>
  );
}
