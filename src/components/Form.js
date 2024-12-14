import React, { useRef, useState } from "react";
import { ReactComponent as Loader } from "../assests/Loader.svg";
import useLogin from "../utils/Hooks/useLogin";
import useSignUp from "../utils/Hooks/useSignUp";
import checkForm from "../utils/formValidator";
const Form = () => {
  const { mutate, isPending, error,reset } = useLogin();
  const mutation = useSignUp();
  const [isSignUpForm, setSignUpForm] = useState(false);
  const [inputErrMsg, setInputErrMsg] = useState(null);
  const eml = useRef("");
  const pw = useRef("");
  const usrnm = useRef("");

  const handleSignUpLabel = () => {
    setSignUpForm((prevStatus) => !prevStatus);
    setInputErrMsg(null);
    if (isSignUpForm) {
      eml.current.value = "";
      mutation.reset();
    }
    reset();
    pw.current.value = "";
    usrnm.current.value = "";
    console.log(isSignUpForm);
  };

  const handleLogin = ({ usrnm, pw }) => {
    const user = {
      username: usrnm.current.value,
      password: pw.current.value,
    };
    const msg = checkForm(
      user?.email,
      user.password,
      user.username,
      isSignUpForm
    );
    setInputErrMsg(msg);
    console.log(inputErrMsg);
    console.log(msg);
    if (msg) return null;
    mutate(user);
  };
  const handleSignUp = ({ eml, usrnm, pw }) => {
    const user = {
      email: eml.current.value,
      username: usrnm.current.value,
      password: pw.current.value,
    };
    const msg = checkForm(
      user.email,
      user.password,
      user.username,
      isSignUpForm
    );
    setInputErrMsg(msg);
    if (msg) return null;
    mutation.mutate(user);
  };
  const btnName = isSignUpForm ? "Sign Up" : "Sign In";
  const formHead = { isSignUpForm } ? "Up" : "In";
  return (
    <div className="flex bg- w-screen h-screen">
      <div className="bg- h-full w-[50%] relative overflow-y-hidden">
        <img
          className="w-full h-full absolute object-cover"
          src="/photo.avif"
          alt="homeImg"
        />
        <div className="max-w-full max-h-full w-full h-full absolute py-[20%] px-[5%]">
          <h1 className="text-gray-700 text-[7vw] text-center font-bold">
            Manage your <span className="text-[#ed510f]">tasks</span> better
          </h1>
          <h1 className="font-bold text-2xl text-gray-800 px-4 py-4 mt-10 mx-4">
            Get the most out of everyday by managing your tasks
          </h1>
        </div>
      </div>
      <div className="bg- w-[50%] flex justify-center p-8">
        <div className="bg- w-auto max-w-[60%] h-[80%] flex flex-col py-8 mt-[15%] px-4">
          <h1 className="font-bold text-3xl text-center text-black">
            Sign {formHead} to Todo Vibe
          </h1>
          <form
            className="mt-8"
            onSubmit={(e) => {
              e.preventDefault();
              if (isSignUpForm) {
                return handleSignUp({ eml, usrnm, pw });
              }
              handleLogin({ usrnm, pw });
            }}
          >
            {isSignUpForm && (
              <input
                className="my-2 p-4 rounded-3xl w-full bg-gray-300 bg-opacity-80 placeholder-gray-400 font-bold"
                type="text"
                placeholder="Email"
                ref={eml}
              />
            )}

            <input
              className="my-2 p-4 rounded-3xl w-full bg-gray-300 bg-opacity-80 placeholder-gray-400 font-bold"
              type="text"
              placeholder="username"
              ref={usrnm}
            />

            <input
              className="my-2 p-4 rounded-3xl w-full bg-gray-300 bg-opacity-80 placeholder-gray-400 font-bold"
              type="text"
              placeholder="Password"
              ref={pw}
            />
            <div className="px-4 absolute">
              <span className="text-red-600 font-semibold">
                {inputErrMsg
                  ? inputErrMsg
                  : isSignUpForm
                  ? mutation?.error?.message
                  : error?.message}
              </span>
            </div>
            <div className="w-[97%] flex justify-between mx-2 py-4 mt-4">
              <div>
                <input
                  type="radio"
                  value="Remember me"
                  name="Remember me"
                  className="hover:cursor-pointer"
                />
                <label className="px-2 font-semibold">Remember me</label>
              </div>
              <span className="underline text-gray-500 hover:cursor-pointer">
                Forgot Password?
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-[#ed510f] px-2 py-4 font-bold text-white rounded-3xl flex justify-center items-center"
            >
              {isSignUpForm ?(mutation.isPending ?<Loader />:btnName):isPending? <Loader /> : btnName}
            </button>
          </form>
          <div className="mt-10 flex px-2">
            <div className="w-[35%] m-auto">
              <hr />
            </div>
            <div>
              <span className="">Or login with</span>
            </div>
            <div className="w-[35%] m-auto">
              <hr />
            </div>
          </div>
          <button className="border border-gray-300 px-2 py-4 mt-4 font-bold text-black rounded-3xl w-full flex justify-center">
            <img
              className="mr-2 h-[30px] w-[30px] rounded-lg"
              src="/google-Logo.png"
              alt="googleLogo"
            />
            <span>Google</span>
          </button>
          <button className="border border-gray-300 bg px-2 py-4 mt-4 font-bold text-black rounded-3xl w-full flex justify-center">
            <img
              className="mr-2 h-[25px] w-[25px]"
              src="/appleLogo.png"
              alt="appleLogo"
            />
            <span>Apple</span>
          </button>
          <div className="text-center mt-4">
            <span>
              {isSignUpForm ? "Already" : "Don't"} have an account?{" "}
              <button
                disabled={isPending}
                className="text-[#ed510f] font-bold underline hover:cursor-pointer"
                onClick={() => {
                  handleSignUpLabel();
                }}
              >
                Sign {isSignUpForm ? "In" : "Up"} now
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
