import { ModalContainer } from "../ModalContainer";
import { Container } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { useModal } from "../../contexts/modalContext";
import { FormEvent, useEffect, useRef, useState } from "react";
import { GrAdd } from "react-icons/gr";
import { Validate } from "../../utils/Validate";
import { toast } from "react-hot-toast";
import { useUser } from "../../contexts/userContext";
import { sendRequest } from "../../requests/userRequests";
import { useSocket } from "../../contexts/socketContext";
export function ModalAddUser() {
  const [email, setEmail] = useState("");
  const { modalAddUser } = useModal();
  const user = useUser();
  const input = useRef<null | HTMLInputElement>(null);
  const socket = useSocket();
  useEffect(() => {
    if (input) {
      input.current?.focus();
    }
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!Validate.isEmail(email)) {
      return toast.error("Invalid email adress");
    }
    sendRequest(email, user.values.token)
      .then((r) => {
        toast.success("Request sent!");
        socket.sendRequest(r.id);
      })
      .catch((e) => {
        toast.error(e);
      });
  };
  return (
    <ModalContainer>
      <Container>
        <h3>Add new friend</h3>
        <form action="" onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            ref={input}
            placeholder="Find a friend by email"
            type="text"
          />
          <button>
            <GrAdd />
          </button>
        </form>
        <div
          className="close"
          onClick={() => {
            modalAddUser.setValue(false);
          }}
        >
          <AiOutlineClose />
        </div>
      </Container>
    </ModalContainer>
  );
}
