import { useEffect, useMemo, useState } from "react";
import { Background } from "../components/Background";
import { BoxForm } from "../components/BoxForm";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleAuth } from "../components/GoogleAuth";
import { RegisterForm } from "../components/RegisterForm";
import { GoogleForm } from "../components/GoogleForm";
import toast from "react-hot-toast";
import { ChangeFormTxt } from "../components/ChangeFormTxt";
export default function Register() {
  const [emailToken, setEmailToken] = useState("");
  const [registerWithGoogle, setRegisterWithGoogle] = useState(false);

  const changeRoute = useNavigate();

  useMemo(() => {
    if (emailToken) {
      toast.success("Choose a username", {
        duration: 3000,
      });
      setRegisterWithGoogle(true);
    }
  }, [emailToken]);
  return (
    <Background>
      {!registerWithGoogle && (
        <BoxForm title="Sign up">
          <RegisterForm />
          <GoogleOAuthProvider
            clientId={process.env.REACT_APP_GOOGLE_API_KEY as string}
          >
            <GoogleAuth setToken={setEmailToken} />
          </GoogleOAuthProvider>

          <ChangeFormTxt
            txt="Already have an account?"
            txtLink="sign in"
            route="/login"
          />
        </BoxForm>
      )}
      {registerWithGoogle && (
        <BoxForm title="Choose your username">
          <GoogleForm emailToken={emailToken} />
        </BoxForm>
      )}
    </Background>
  );
}
