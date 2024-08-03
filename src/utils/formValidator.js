const checkForm = (email,password,username,isSignUpForm) => {
  const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPwValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);
  console.log(isPwValid,"form validator")
  // returns false if tests fail
  if (!isEmailValid) return "invalid email";
  if(isSignUpForm){
  if (username.length===0) return "enter username";
  }
  if (!isPwValid) return "include upper & lowercases and special character in password";

  return null;
};

export default checkForm;
