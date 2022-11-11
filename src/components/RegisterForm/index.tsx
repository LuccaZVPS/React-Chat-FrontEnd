import { FormEvent, useState } from "react";
import { validateRegister } from "../../utils/validateRegister";
import { Container } from "./styles";
import InputForm from "../InputForm";
import { AiFillLock } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { RiUser3Fill } from "react-icons/ri";
import { Form } from "../form";
import { register } from "../../requests/authRequests";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export function RegisterForm() {
  const changeRouter = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    username: "",
    password: "",
    password2: "",
  });
  const clearErrors = () => {
    errors.email = "";
    errors.username = "";
    errors.password = "";
    errors.password2 = "";
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    clearErrors();
    const formErrors = validateRegister(
      email,
      username,
      password,
      passwordConfirm
    );
    if (formErrors) {
      setErrors(formErrors);
      return;
    }
    setLoading(true);
    register(email, username, password)
      .then((r) => {
        if (r) {
          localStorage.setItem("created", "true");
          changeRouter("/login");
          return;
        } else {
          let newError = errors;
          newError.email = "Email aready taken";
          setErrors({ ...newError });
        }
      })
      .catch(() => {
        toast.error("error while saving your account");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Container>
      <Form loading={loading} btnTxt="Sign Up" handleSubmit={handleSubmit}>
        <InputForm
          error={errors.email}
          Icon={MdEmail}
          placeholder="E-mail"
          setTxt={setEmail}
          type="text"
        />
        <InputForm
          error={errors.username}
          Icon={RiUser3Fill}
          placeholder="Username"
          setTxt={setUsername}
          type="text"
        />
        <InputForm
          error={errors.password}
          Icon={AiFillLock}
          placeholder="Passowrd"
          setTxt={setpassword}
          type="password"
        />
        <InputForm
          error={errors.password2}
          Icon={AiFillLock}
          placeholder="Confirm your password"
          setTxt={setPasswordConfirm}
          type="password"
        />
      </Form>
    </Container>
  );
}
