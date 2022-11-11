import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { getMessage } from "../requests/messageRequests";
import { useFriends } from "./friendsContext";
import { useUser } from "./userContext";
interface props {
  children: ReactNode;
}
const Context = createContext({} as context);

export default function ChatContext({ children }: props) {
  const friends = useFriends();
  const { values } = useUser();
  const [clickedFriend, setClickedFriend] = useState("");
  const [newMessage, setNewMessage] = useState<message | null>(null);

  const [allMessages, setAllmessages] = useState<messages[]>([] as messages[]);
  const [selectedChat, setSelectedChat] = useState<selected>({
    avatar: "",
    _id: "",
    username: "",
    messages: {
      friend: "",
      message: [],
    },
  });
  useMemo(() => {
    if (!clickedFriend) {
      return;
    }

    const friendSelected = friends.values.filter(
      (friend) => friend._id === clickedFriend
    );
    setSelectedChat({ ...friendSelected[0] });
  }, [clickedFriend]);

  useMemo(async () => {
    if (friends.values.length < 1) {
      return;
    }
    const messages = await Promise.all(
      friends.values.map(async (friend) => {
        const messageResponse = await getMessage(values.token, friend._id);
        const message = {
          friend: friend._id,
          message: messageResponse.reverse(),
        };

        return message;
      })
    );
    setAllmessages(messages as unknown as messages[]);
  }, [friends]);
  useMemo(() => {
    if (!selectedChat._id || allMessages.length < 1) {
      return;
    }

    const selectedMessage = allMessages.filter(
      (msg) => msg.friend === selectedChat._id
    );
    if (selectedChat.messages?.friend === selectedMessage[0].friend) {
      return;
    }

    setSelectedChat({ ...selectedChat, messages: selectedMessage[0] });
  }, [clickedFriend, selectedChat]);

  useMemo(() => {
    if (!newMessage || !allMessages) {
      return;
    }
    const obj = {
      message: newMessage.message,
      _id: newMessage._id,
      sender: newMessage.sender,
      users: [newMessage.users[0], newMessage.users[1]],
    };
    var newList = allMessages.filter(
      (msg) => msg.friend !== obj.users[0] || msg.friend !== obj.users[1]
    );
    var chatFriend = allMessages.filter(
      (msg) => msg.friend === obj.users[0] || msg.friend === obj.users[1]
    );
    var repeated = { ...chatFriend[0] };
    repeated.message = repeated.message.filter((msgs) => msgs._id === obj._id);
    if (repeated.message.length > 0) {
      return;
    }
    chatFriend[0].message.reverse().push(obj);
    chatFriend[0].message.reverse();
    newList.push(chatFriend[0]);
  }, [newMessage]);

  return (
    <Context.Provider
      value={{
        add: setNewMessage,
        selected: selectedChat,
        setCurrentFriend: setClickedFriend,
        current: clickedFriend,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export const useChat = () => useContext(Context);

interface selected {
  avatar: string;
  username: string;
  messages?: messages;
  _id: string;
}
export interface messages {
  friend: string;
  message: message[];
}
interface context {
  selected: selected;
  setCurrentFriend: Dispatch<SetStateAction<string>>;
  current: string;
  add: Dispatch<SetStateAction<message | null>>;
}
export interface message {
  sender: string;
  users: string[];
  message: string;
  _id: string;
}
