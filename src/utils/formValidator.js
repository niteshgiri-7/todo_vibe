const checkForm = (email, password) => {
  // const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPwValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  // returns false if tests fail
  // if(!isEmailValid) return "invalid email";
  if(!isPwValid) return "include upper & lowercases and special character in password";

  return null;
};


export default checkForm;