import { FormEvent, ReactNode, Dispatch, SetStateAction } from "react";
import { Load } from "../Load";
import { Container } from "./styles";
interface props {
  children: ReactNode;
  handleSubmit: (e: FormEvent) => void;
  btnTxt: string;
  loading: boolean;
}
export function Form({ children, handleSubmit, btnTxt, loading }: props) {
  return (
    <Container>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        {children}
        <div className="btns-form">
          {!loading && <button type="submit">{btnTxt}</button>}
          {loading && (
            <button
              type="submit"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Load />
            </button>
          )}
        </div>
      </form>
    </Container>
  );
}
