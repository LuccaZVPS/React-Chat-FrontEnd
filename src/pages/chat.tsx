import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChatPage } from "../components/ChatPage";
import { ChooseAvatar } from "../components/ChooseAvatar";
import ChatContext from "../contexts/chatContext";
import FriendsContext from "../contexts/friendsContext";
import RequestsContext from "../contexts/requestContext";
import { SocketContext } from "../contexts/socketContext";
import { useUser } from "../contexts/userContext";

export default function Chat() {
  const { values } = useUser();
  const changeRouter = useNavigate();
  useEffect(() => {
    if (!values.token) {
      changeRouter("/login");
    }
  }, [values.token]);
  return (
    <FriendsContext>
      <ChatContext>
        <RequestsContext>
          <SocketContext>
            {values.avatar && <ChatPage />}
            {!values.avatar && <ChooseAvatar />}
          </SocketContext>
        </RequestsContext>
      </ChatContext>
    </FriendsContext>
  );
}
