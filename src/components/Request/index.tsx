import { Container } from "./styles";
import { BiBlock, BiCheck } from "react-icons/bi";
import { refuseRequest, acceptRequest } from "../../requests/userRequests";
import { useUser } from "../../contexts/userContext";
import { useRequests } from "../../contexts/requestContext";
import { useFriends } from "../../contexts/friendsContext";
import { useEffect, useRef } from "react";
import { useSocket } from "../../contexts/socketContext";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-avataaars-sprites";
interface props {
  username: string;
  avatar: string;
  id: string;
}
export function Request({ avatar, id, username }: props) {
  const user = useUser();
  const containerDiv = useRef<null | HTMLDivElement>(null);
  const friend = useFriends();
  const socket = useSocket();
  const request = useRequests();
  const img = useRef<HTMLDivElement | null>(null);

  const handleRefuse = (id: string) => {
    refuseRequest(user.values.token, id).then(() => {
      request?.delete(id);
    });
  };

  const handleAccept = (id: string) => {
    acceptRequest(user.values.token, id).then(() => {
      if (containerDiv) {
        socket.friendAccepted(id);
        containerDiv.current?.classList.add("accepted");
      }
      setTimeout(() => {
        request?.delete(id);
        friend.add({ _id: id, avatar: avatar, username: username });
      }, 1000 / 2);
    });
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
    <Container>
      <div className="container" ref={containerDiv}>
        <div ref={img} className="img-request"></div>
        <div className="txt">
          <h3>{username}</h3>
        </div>

        <div className="option">
          <div
            className="accept"
            onClick={(e) => {
              handleAccept(e.currentTarget.id);
            }}
            id={id}
          >
            <BiCheck />
          </div>
          <div
            className="refuse"
            onClick={(e) => {
              handleRefuse(e.currentTarget.id);
            }}
            id={id}
          >
            <BiBlock />
          </div>
        </div>
      </div>
    </Container>
  );
}
