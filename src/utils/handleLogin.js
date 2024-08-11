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
  const email = isSignUpForm ? eml.current.value : null;
  const password = pw.current.value;
  const username = usrnm.current.value;

  console.log("print",email, password,username,isSignUpForm);

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
    console.log(response)
    console.log("server responded");
    const json = await response.json();
    const username = json?.username;
    if(username){
      dispatch(addUser(username));
      navigate("/dashboard");
    }
    if (json?.token) {
      localStorage.setItem("authToken", json.token);
    }
    const error = json?.error;
    if (error) {
     return  setErrMsg(error)
    }

    
  } catch (error) {
    const errMessage = error.message;
    setErrMsg(errMessage);
  }
};

export default handleLogin;
