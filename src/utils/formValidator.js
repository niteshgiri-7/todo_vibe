const checkForm = (email,password,username,isSignUpForm) => {
 
  const isPwValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);
 
 
  if(isSignUpForm){
    const isEmailValid = /^\S+@\S+\.\S+$/.test(email);
    if (!isEmailValid) return "invalid email";
  
  }
  if (username.trim().length===0) return "enter username";
  console.log(isPwValid,password)
  if (!isPwValid) return "include upper & lowercases and special character in password";

  return null;
};

export default checkForm;
