import React from "react";
import useLogOut from "../utils/Hooks/useLogOut";
const Settings = () => {
  const { logOut } = useLogOut();
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div className="bg- w-full h-screen flex justify-center ">
      <div className="bg- w-[30%] h-[50%] mt-[5%]">
        <div className="w-full p-4 bg- flex h-auto">
          <img
            className="w-[100px] rounded-[50%]"
            src="/user.jpg"
            alt="useImg"
          ></img>
          <div className=" w-[70%] flex justify-center">
            <div className="bg- flex flex-col text-center">
              <span className="font-bold my-auto">nitesh</span>
              <span className="p-2">nitesh@gmail.com</span>
              <button className="bg-transparent px-4 py-2 shadow-md shadow-gray-700  from-gray-100 border border-red-500 rounded-lg hover:bg-gray-200 hover:border-red-800">
                Edit Picture
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[50%] p-6 bg- flex justify-center items-center">
          <div className="bg- w-full h-full flex flex-col text-center justify-around font-bold">
            <span className="bg-gray-500 text-white rounded-lg w-full px-2 py-2 hover:bg-opacity-80 cursor-pointer shadow-gray-200 shadow-2xl">
              Theme mode
            </span>
            <span className="bg-gray-500 text-white rounded-lg w-full px-2 py-2 hover:bg-opacity-80 cursor-pointer shadow-gray-200 shadow-2xl">
              Change Password
            </span>
            <span>
              {" "}
              <button
                className="bg-gray-500 text-white rounded-lg w-full px-2 py-2 hover:bg-opacity-80 shadow-gray-200 shadow-2xl"
                onClick={() => {
                  handleLogOut();
                }}
              >
                Log Out
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
