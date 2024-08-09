import checkForm from "./formValidator";
import { addUser } from "./userSlice";
const handleLogin = async (
  isSignUpForm,
  eml,
  pw,
  usrnm,
  setErrMsg,
  dispatch,
  navigate
) => {
  const URL = isSignUpForm ? "/users/signup" : "/users/login";
  console.log("button clicked");
  const email = isSignUpForm ? eml.current.value : null;
  const password = pw.current.value;
  const username = usrnm.current.value;

  console.log(email, password);

  const validatorMessage = checkForm(email, password, username, isSignUpForm);
  setErrMsg(validatorMessage);
  if (validatorMessage !== null) return;

  const requestBody = {
    password: password,
    ...(isSignUpForm && { username: username, email: email }),
    ...(!isSignUpForm && { username: username }),
  };

  try {
    console.log("waiting for server");
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    console.log("server responded");
    const json = await response.json();
    const username = json.username;
    dispatch(addUser(username));
    navigate("/dashboard");
    const error = json?.error;
    if (error) {
      throw new Error(error);
    }

    if (json?.token) {
      localStorage.setItem("authToken", json.token);
    }
  } catch (error) {
    const errMessage = error.message;
    setErrMsg(errMessage);
  }
};

export default handleLogin;
