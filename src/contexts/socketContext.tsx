import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { io, Socket } from "socket.io-client";
import { useUser } from "./userContext";
import { friend, requestInfo } from "../requests/userRequests";
import { useRequests } from "./requestContext";
import { useFriends } from "./friendsContext";
import { message, useChat } from "./chatContext";
const Context = createContext<context>({} as context);
interface props {
  children: ReactNode;
}
export function SocketContext({ children }: props) {
  const user = useUser();
  const requests = useRequests();
  const friends = useFriends();
  const chat = useChat();
  const [socket, setSocket] = useState<Socket>();

  useMemo(() => {
    setSocket(
      io(process.env.REACT_APP_SOCKET_URL as string, {
        auth: {
          token: user.values.token,
        },
      })
    );
  }, []);

  const sendRequest = (email: string) => {
    socket?.emit("send-request", email);
  };

  useMemo(() => {
    if (!socket) {
      return;
    }
    const listener = (request: requestInfo) => requests.add(request);

    socket.on("new-request", listener);

    return () => socket.off("new-request", listener);
  }, [socket]);

  useMemo(() => {
    if (!socket) {
      return;
    }
    const listener = (friend: requestInfo) => {
      friends.add(friend);
      requests.delete(friend._id);
    };
    socket.on("new-friend", listener);

    return () => socket.off("new-friend", listener);
  }, [socket]);

  useMemo(() => {
    if (!socket) {
      return;
    }
    const listener = (message: message) => {
      chat.add(message);
    };
    socket.on("new-message", listener);

    return () => socket.off("new-message", listener);
  }, [socket]);

  const friendAccepted = (userId: string) => {
    socket?.emit("friend-accepted", userId);
  };

  const messageSent = (messageId: string) => {
    socket?.emit("message-sent", messageId);
  };

  return (
    <Context.Provider value={{ sendRequest, friendAccepted, messageSent }}>
      {children}
    </Context.Provider>
  );
}
export const useSocket = () => useContext(Context);

export interface context {
  sendRequest: (userId: string) => void;
  friendAccepted: (userId: string) => void;
  messageSent: (messageId: string) => void;
}
