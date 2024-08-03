import React from "react";

const Form = () => {
  return (
    <div className="flex bg- w-screen h-screen">
      <div className="bg- h-full w-[50%] relative ">
        <img
          className="w-full h-full absolute object-cover"
          src="/photo.avif"
          alt="homeImg"
        />

        <div className="max-w-full max-h-full w-full h-full absolute py-[15%] px-[5%] ">
          <h1 className="text-gray-700 text-[140px] text-center font-bold">
            Manage your <span className="text-[#ed510f]">tasks</span> better
          </h1>
          <h1 className="font-bold text-2xl text-gray-800 px-4 py-4 mt-10 mx-4 ">
            Get the most out of everyday by managing your tasks
          </h1>
        </div>
      </div>
      <div className="bg- w-[50%] flex justify-center p-8">
        <div className="bg- w-auto max-w-[60%] h-[80%] flex flex-col  py-8 mt-[15%] px-4">
          <h1 className="font-bold text-3xl text-center text-black">
            Sign in to Todo Vibe
          </h1>

          <form className="mt-8">
            <input
              className="my-2 p-4 rounded-3xl w-full bg-gray-300 bg-opacity-80  placeholder-gray-400 font-bold"
              type="text"
              placeholder="Email"
            ></input>
            <input
              className="my-2 p-4 rounded-3xl w-full bg-gray-300 bg-opacity-80 placeholder-gray-400 font-bold"
              type="text"
              placeholder="Password"
            ></input>
            <div className=" w-[97%] flex justify-between mx-2 py-4">
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
            <button className="w-full bg-[#ed510f] px-2 py-4 font-bold text-white rounded-3xl">
              Sign In
            </button>
          </form>
          <div className="mt-10 flex px-2">
            <div className="w-[35%] m-auto">
              <hr></hr>
            </div>
            <div>
              <span className="text-">Or login with</span>
            </div>
            <div className="w-[35%] m-auto">
              <hr></hr>
            </div>
          </div>
          <button className=" border border-gray-300 px-2 py-4 mt-4 font-bold text-black rounded-3xl w-full flex justify-center">
            <img
              className="mr-2 h-[30px] w-[30px] rounded-lg"
              src="/google-Logo.png"
              alt="googleLogo"
            ></img>
            <span>Google</span>
          </button>
          <button className="border border-gray-300 bg px-2 py-4 mt-4 font-bold text-black rounded-3xl w-full flex justify-center">
            <img
              className="mr-2 h-[25px] w-[25px]"
              src="/appleLogo.png"
              alt="googleLogo"
            ></img>
            <span>Apple</span>
          </button>
          <div className="text-center mt-4">
            <span>
              Don't have an account?{" "}
              <span className="text-[#ed510f] font-bold underline hover:cursor-pointer">
                {" "}
                Sign Up now
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
