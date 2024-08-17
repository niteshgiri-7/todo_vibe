const changePwValidator = (username, oldPassword, newPassword) => {
  const isNewPwValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(
    newPassword
  );
  console.log(username, oldPassword, newPassword);
  if (username.trim().length === 0) return "enter username";
  if (oldPassword.trim().length === 0) return "enter old password";
  if (!isNewPwValid) {
    return "include both cases and number";
  }
};

export default changePwValidator;
