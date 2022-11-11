import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { requestInfo, getRequests } from "../requests/userRequests";
import { useUser } from "./userContext";
interface props {
  children: ReactNode;
}
const Context = createContext<context>([] as unknown as context);

export default function RequestsContext({ children }: props) {
  const user = useUser();
  const [newRequest, setNewRequest] = useState<requestInfo | null>(null);
  const [requests, setRequests] = useState<requestInfo[]>([] as requestInfo[]);

  useMemo(() => {
    if (user.values.friendRequests.length === 0 || !user.values.token) {
      return;
    }

    getRequests(user.values.token).then((r) => {
      setRequests(r);
    });
  }, [user.values.friendRequests]);

  const deleteRequest = (id: string) => {
    var newList = requests;
    newList = newList.filter(function (obj) {
      return obj._id !== id;
    });
    setRequests(newList);
  };

  useMemo(() => {
    if (!newRequest) {
      return;
    }
    var newList = requests;
    newList = newList.filter((req) => req._id !== newRequest._id);
    newList.push(newRequest);
    setRequests(newList.map((req) => req));
  }, [newRequest]);

  return (
    <Context.Provider
      value={{ list: requests, delete: deleteRequest, add: setNewRequest }}
    >
      {children}
    </Context.Provider>
  );
}

export const useRequests = () => useContext(Context);
interface context {
  list: requestInfo[];
  delete: (id: string) => void;
  add: Dispatch<SetStateAction<requestInfo | null>>;
}
