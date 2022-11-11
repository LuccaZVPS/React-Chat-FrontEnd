import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
interface props {
  children: ReactNode;
}
const Context = createContext<context>({} as context);

export default function ModalContext({ children }: props) {
  const [modalAddUser, setModalAddUser] = useState(false);
  const [modalConfirm, setModalConfirm] = useState(false);
  const [modalConfirmOptions, setModalConfirmOptions] = useState<modalConfig>({
    description: "",
    title: "",
  });

  const confirm = () => {
    if (!modalConfirmOptions.setConfirm) {
      return;
    }
    modalConfirmOptions.setConfirm(true);
  };

  return (
    <Context.Provider
      value={{
        modalAddUser: { value: modalAddUser, setValue: setModalAddUser },
        modalConfirm: {
          confirm,
          setConfig: setModalConfirmOptions,
          value: modalConfirm,
          setValue: setModalConfirm,
          config: { ...modalConfirmOptions },
        },
      }}
    >
      {children}
    </Context.Provider>
  );
}
export const useModal = () => useContext(Context);

interface context {
  modalAddUser: modal;
  modalConfirm: modalConfirm;
}
interface modal {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
}

interface modalConfirm extends modal {
  config: modalConfig;
  confirm: () => void;
  setConfig: Dispatch<SetStateAction<modalConfig>>;
}

interface modalConfig {
  setConfirm?: Dispatch<SetStateAction<boolean>>;
  title: string;
  description: string;
}
