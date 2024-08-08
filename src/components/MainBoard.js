import React from "react";
import NavBar from "./NavBar";

const MainBoard = () => {
  return (
    <div className="w-full h-screen  px-[4%] py-[0.7%] ">
      <NavBar />
      <div className="h-[5%] w-[90%]   text-white mt-[6%] flex justify-between pr-[10%]">
        <span className="font-bold text-3xl text-black">Main Boards</span>
        <div>
        <button className="bg-[#314c9e] px-6 py-4 rounded-lg font-bold">Add Board</button>
        </div>
     
      </div>
      <div className=" w-[45%] py-4 flex justify-between  text-[#476279]">
          <span>
            you have <span className="font-bold">6</span> tasks remaining
          </span>
          <span className="pr-2">
            sort by:
            <select>
              <option>oldest</option>
              <option>newest</option>
            </select>
          </span>
        </div>
    </div>
  );
};

export default MainBoard;
