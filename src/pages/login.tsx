import { FormEvent, useEffect, useMemo, useState } from "react";
import { Background } from "../components/Background";
import { BoxForm } from "../components/BoxForm";

import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleAuth } from "../components/GoogleAuth";
import { LoginForm } from "../components/LoginForm";
import toast from "react-hot-toast";
import { ChangeFormTxt } from "../components/ChangeFormTxt";
import { loginGoogle } from "../requests/authRequests";
import { useUser } from "../contexts/userContext";
export default function Login() {
  const [emailToken, setEmailToken] = useState("");
  const changeRouter = useNavigate();
  const { login, values } = useUser();
  useEffect(() => {
    if (values.token) {
      changeRouter("/");
    }
    const showToastSucess = localStorage.getItem("created");
    if (showToastSucess === "true") {
      toast.success("Account created", { duration: 2500 });
      localStorage.removeItem("created");
    }
  }, [values.token]);
  useMemo(() => {
    if (!emailToken) {
      return;
    }
    loginGoogle(emailToken)
      .then((r) => {
        if (r) {
          saveToken(r);
          changeRouter("/");
        } else {
          toast.error("E-mail adress not found");
        }
      })
      .catch(() => {
        toast.error("Invalid email");
      });
  }, [emailToken]);

  const saveToken = (token: string) => {
    localStorage.setItem("token", token);

    login(token);
  };
  return (
    <Background>
      <BoxForm title="Sign in">
        <LoginForm />
        <GoogleOAuthProvider
          clientId={process.env.REACT_APP_GOOGLE_API_KEY as string}
        >
          <GoogleAuth setToken={setEmailToken} />
        </GoogleOAuthProvider>

        <ChangeFormTxt
          txt="Dont have an account?"
          txtLink="create here"
          route="/register"
        />
      </BoxForm>
    </Background>
  );
}
