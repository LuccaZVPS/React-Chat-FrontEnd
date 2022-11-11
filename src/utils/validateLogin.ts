import { Validate } from "./Validate";
export function validateLogin(email: string, password: string) {
  const errors = {
    email: "",
    password: "",
  };
  if (!Validate.isEmail(email)) {
    errors.email = "Invalid email adress";
  }

  if (!Validate.lengthIsCorrect(password, [8, 30])) {
    errors.password = "Password must contain 3/12 characters";
  }

  if (!Validate.notContainWhiteSpace(password)) {
    errors.password = "Password cannot contain white space";
  }

  if (!errors.email && !errors.password) {
    return false;
  }

  return errors;
}
