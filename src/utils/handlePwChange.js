import changePwValidator from "./changePwValidator";
import { BASE_URL } from "./constants";
const handlePwChange = async (
  username,
  oldPassword,
  newPassword,
  setErrMsg
) => {
  const validatorMsg = changePwValidator(username, oldPassword, newPassword);
  if (validatorMsg) {
    setErrMsg(validatorMsg);
    return false;
  }
  const URL = BASE_URL+"/users/changepassword";
  const requestBody = {
    username: username,
    oldPassword: oldPassword,
    newPassword: newPassword,
  };
  const authToken = localStorage.getItem("authToken");
  try {
    const response = await fetch(URL, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(requestBody),
    });
    const json = await response.json();
    const err = json?.error;
    if (err) {
      setErrMsg(err);
      return false;
    }

    return true;
  } catch (error) {
    setErrMsg("unexpected error occurred, try again");
    return false;
  }
};

export default handlePwChange;
