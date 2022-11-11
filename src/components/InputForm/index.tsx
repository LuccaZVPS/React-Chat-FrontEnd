import { Dispatch, memo, SetStateAction, useState } from "react";
import { IconType } from "react-icons";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Container } from "./styles";
interface InputFormProps {
  type: string;
  placeholder: string;
  setTxt: Dispatch<SetStateAction<string>>;
  Icon: IconType;
  error: string;
}

function InputForm({ placeholder, type, setTxt, Icon, error }: InputFormProps) {
  const isPassword = type === "password" ? true : false;
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Container>
      {error && <div className="error">{error}</div>}
      <div className="icon">
        <Icon />
      </div>
      <input
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        onChange={(e) => {
          setTxt(e.target.value);
        }}
      />
      {isPassword && (
        <div
          className="eye"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword && <AiFillEyeInvisible />}
          {!showPassword && <AiFillEye />}
        </div>
      )}
    </Container>
  );
}
export default memo(InputForm);
