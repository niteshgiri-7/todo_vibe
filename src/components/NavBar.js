import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  return (
    <div className="flex justify-between  ">
    <div className="relative w-[25%]">
      <input
        className="w-full bg-gray-200 pl-6 pr-10 py-4 rounded-md"
        placeholder="Search"
      />
      <span className="w-auto h-auto absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl hover:cursor-pointer">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>
    </div>
    <div className="flex py-2">
      <img className="w-[50px] "src="/user.jpg" alt="user"></img>
      <span className="py-2 px-4 font-bold">Hello,user!</span>
    </div>
      
    </div>

  );
};

export default NavBar; 
