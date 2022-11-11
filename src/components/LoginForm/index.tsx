import { useState, FormEvent, Dispatch, SetStateAction } from "react";
import { AiFillLock } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { validateLogin } from "../../utils/validateLogin";
import { Form } from "../form";
import InputForm from "../InputForm";
import { login } from "../../requests/authRequests";
import { toast } from "react-hot-toast";
import { useUser } from "../../contexts/userContext";

export function LoginForm() {
  const context = useUser();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const clearErrors = () => {
    errors.email = "";
    errors.password = "";
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    clearErrors();
    const formErrors = validateLogin(email, password);
    if (formErrors) {
      setErrors(formErrors);
      return;
    }
    setLoading(true);
    login(email, password)
      .then((r) => {
        if (!r) {
          return toast.error("Wrong email or password");
        }
        localStorage.setItem("token", r);

        context.login(r);
      })

      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Form loading={loading} btnTxt="Login" handleSubmit={handleSubmit}>
      <InputForm
        error={errors.email}
        Icon={MdEmail}
        placeholder="E-mail"
        setTxt={setEmail}
        type="text"
      />
      <InputForm
        error={errors.password}
        Icon={AiFillLock}
        placeholder="Password"
        setTxt={setPassword}
        type="password"
      />
    </Form>
  );
}
