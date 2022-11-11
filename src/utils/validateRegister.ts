import { Validate } from "./Validate";
import { register } from "../requests/authRequests";
export function validateRegister(
  email: string,
  username: string,
  password: string,
  password2: string
) {
  const errors = {
    email: "",
    username: "",
    password: "",
    password2: "",
  };
  if (!Validate.isEmail(email)) {
    errors.email = "Invalid email adress";
  }
  if (!Validate.lengthIsCorrect(username, [3, 16])) {
    errors.username = "username must contain 3/12 characters";
  }
  if (!Validate.lengthIsCorrect(password, [8, 30])) {
    errors.password = "Password must contain 3/12 characters";
  }
  if (!Validate.notContainWhiteSpace(username)) {
    errors.username = "Username cannot contain white space";
  }
  if (!Validate.notContainWhiteSpace(password)) {
    errors.password = "Password cannot contain white space";
  }
  if (!Validate.areEquals([password, password2])) {
    errors.password2 = "Password are not equal";
  }
  if (
    !errors.email &&
    !errors.password &&
    !errors.username &&
    !errors.password2
  ) {
    return false;
  }
  return errors;
}
