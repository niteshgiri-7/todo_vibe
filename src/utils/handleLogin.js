import checkForm from "./formValidator";
import { login } from "./userSlice";
import { BASE_URL } from "./constants";
const handleLogin = async (
  isSignUpForm,
  eml,
  pw,
  usrnm,
  setErrMsg,
  dispatch,
  navigate,
  setLoading
) => {
  const URL = isSignUpForm
    ? BASE_URL + "/users/signup"
    : BASE_URL + "/users/login";
  const email = isSignUpForm ? eml.current.value : null;
  const password = pw.current.value;
  const username = usrnm.current.value;

  const validatorMessage = checkForm(email, password, username, isSignUpForm);
  setErrMsg(validatorMessage);
  if (validatorMessage !== null) return;

  const requestBody = {
    password: password,
    ...(isSignUpForm && { username: username, email: email }),
    ...(!isSignUpForm && { username: username }),
  };

  try {
    setLoading(true);
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    setLoading(false);
    const responseText = await response.text();
    if (responseText) {
      const json = JSON.parse(responseText);

      const username = json?.username;
      if (username) {
        dispatch(login(username));
        navigate("/dashboard");
      }
      if (json?.token) {
        localStorage.setItem("authToken", json.token);
      }
      const error = json?.error;
      if (error) {
        return setErrMsg(error);
      }
    } else {
      throw new Error("Empty response from server");
    }
  } catch (error) {
    const errMessage = error.message || "Failed to connect to the server";
    setErrMsg(errMessage);
  }
};

export default handleLogin;
