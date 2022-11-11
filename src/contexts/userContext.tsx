import { userInfo } from "os";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { getUserData } from "../requests/authRequests";
interface props {
  children: ReactNode;
}
const Context = createContext<context>({} as context);

export default function UserContext({ children }: props) {
  const login = (tokenRecived: string) => {
    getUserData(tokenRecived).then((r) => {
      setUserInfo({ values: r });
    });
  };

  const [userInfo, setUserInfo] = useState<info>({
    values: {
      avatar: "",
      friendsId: [""],
      friendRequests: [""],
      token: "",
      isUsingAvatar: false,
      id: "",
    },
  });

  useEffect(() => {
    if (!userInfo.values.token) {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        login(storedToken);
      }
    }
  }, []);

  return (
    <Context.Provider
      value={{
        values: userInfo.values,
        login,
        setValue: setUserInfo,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export const useUser = () => useContext(Context);
export interface info {
  values: {
    token: string;
    friendsId: string[];
    friendRequests: string[];
    avatar: string;
    isUsingAvatar: false;
    id: string;
  };
}
export interface context extends info {
  login: (tokenRecived: string) => void;
  setValue: Dispatch<SetStateAction<info>>;
}
