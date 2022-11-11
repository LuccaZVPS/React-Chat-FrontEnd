import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getFriendList, friend } from "../requests/userRequests";
import { useUser } from "./userContext";
interface props {
  children: ReactNode;
}
const Context = createContext<context>({} as context);

export default function FriendsContext({ children }: props) {
  const user = useUser();
  const [friends, setFriends] = useState<friend[]>([]);
  const [friendsFiltred, setFriendsFiltred] = useState<friend[]>([]);
  const [filter, setFilter] = useState("");
  const [newFriend, setNewFriend] = useState<friend | null>(null);

  useMemo(() => {
    var filtred: friend[] = [];
    friends.forEach((f) => {
      let name = f.username.toLowerCase();
      if (name.includes(filter)) {
        filtred.push(f);
      }
    });
    setFriendsFiltred(filtred.map((f) => f));
    // eslint-disable-next-line
  }, [filter]);

  useEffect(() => {
    if (!user.values.token || friends.length > 0) {
      return;
    }
    getFriendList(user.values.token).then((r) => {
      if (r.length > 0) {
        setFriends(r);
      }
    });
  });

  useMemo(() => {
    if (!newFriend) {
      return;
    }
    var newList = friends;
    newList = newList.filter((req) => req._id !== newFriend._id);
    newList.push(newFriend);
    setFriends(newList.map((f) => f));
    // eslint-disable-next-line
  }, [newFriend]);

  return (
    <Context.Provider
      value={{
        add: setNewFriend,
        filter,
        values: friends,
        setFilter,
        valuesFilted: friendsFiltred,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export const useFriends = () => useContext(Context);
export interface context {
  values: friend[];
  add: Dispatch<SetStateAction<friend | null>>;
  setFilter: Dispatch<SetStateAction<string>>;
  valuesFilted: friend[];
  filter: string;
}
