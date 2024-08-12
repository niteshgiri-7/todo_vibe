import React from "react";

const Settings = () => {
  return (
    <div className="bg-black w-full h-screen flex justify-center ">
      <div className="bg-pink-800 w-[30%] h-[70%] mt-[5%]">
        <div className="w-full p-4 bg-green-800 flex ">
          <img className="w-[100px] rounded-full"src="/user.jpg" alt="useImg"></img>
          <div className=" w-[70%] flex justify-center">
          <div className="bg-yellow-600 flex flex-col text-center">
          <span className="font-bold my-auto bg-blue-700 p-2">nitesh</span>
          <span className="p-2">nitesh@gmail.com</span>
          <button className="bg-transparent border border-red-500 rounded-lg px-4 py-2">Edit Picutre</button>
          </div>
          </div>
        
        
        </div>
      </div>
    </div>
  );
};

export default Settings;
