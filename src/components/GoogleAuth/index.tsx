import { Dispatch, SetStateAction } from "react";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { Container } from "./styles";
import toast from "react-hot-toast";

interface props {
  setToken: Dispatch<SetStateAction<string>>;
}
export function GoogleAuth({ setToken }: props) {
  const handleAuth = async (r: CredentialResponse) => {
    setToken(r.credential as string);
  };
  const handleError = () => {
    toast.error("Errorerror verifying email", {
      duration: 3000,
    });
  };
  return (
    <Container>
      <div className="or">OR</div>
      <div className="btn-google">
        <GoogleLogin
          size="large"
          text="continue_with"
          onSuccess={handleAuth}
          onError={handleError}
        />
      </div>
    </Container>
  );
}
