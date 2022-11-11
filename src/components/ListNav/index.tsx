import { Container } from "./styles";
import { FiUsers, FiSend } from "react-icons/fi";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import { useRequests } from "../../contexts/requestContext";
import { requestInfo } from "../../requests/userRequests";
interface props {
  setList: Dispatch<SetStateAction<boolean>>;
  list: boolean;
}
export function ListNav({ setList, list }: props) {
  const requests = useRequests();

  return (
    <Container display={list.toString()}>
      <div className="nav">
        <div
          className="option a"
          onClick={() => {
            setList(false);
          }}
        >
          <FiUsers />
          Friends
        </div>
        <div
          className="option b"
          onClick={() => {
            setList(true);
          }}
        >
          {requests.list.length > 0 && (
            <div className="number-ball">{requests.list.length}</div>
          )}
          <FiSend />
          Requests
        </div>
      </div>
    </Container>
  );
}
