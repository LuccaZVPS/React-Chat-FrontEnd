import { FormEvent, useState } from "react";
import { Form } from "../form";
import InputForm from "../InputForm";
import { RiUser3Fill } from "react-icons/ri";
import { Validate } from "../../utils/Validate";
import { registerWithGoogle } from "../../requests/authRequests";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
interface GoogleFormProps {
  emailToken: string;
}
export function GoogleForm({ emailToken }: GoogleFormProps) {
  const changeRouter = useNavigate();
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [laoding, setLoading] = useState(false);

  const validatedUsername = () => {
    if (!Validate.lengthIsCorrect(username, [3, 16])) {
      setUsernameError("Username must have 3/16 characters");
      return false;
    }
    if (!Validate.notContainWhiteSpace(username)) {
      setUsernameError("Username cannot contain white space");
      return false;
    }
    return true;
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validatedUsername()) {
      return;
    }
    setLoading(true);
    registerWithGoogle(emailToken, username)
      .then((r) => {
        if (r) {
          localStorage.setItem("created", "true");
          changeRouter("/login");
        } else {
          toast.error("Email adress already taken");
        }
      })
      .catch(() => {
        toast.error("Internal Error. Try again later");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Form loading={laoding} btnTxt="Finish" handleSubmit={handleSubmit}>
      <InputForm
        placeholder="Username"
        error={usernameError}
        setTxt={setUsername}
        type={"text"}
        Icon={RiUser3Fill}
      />
    </Form>
  );
}
