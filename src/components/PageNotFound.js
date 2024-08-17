import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="w-full h-screen bg-gray-300 flex ">
      <div className="w-6/12 h-[50%] mx-auto my-[5%] text-center">
      <h1 className="text-[7vw]">404</h1>
      <p className="px-4 py-2 font-bold text-[2vw]">Page not found or under development!</p>
      <Link to="/dashboard" ><p className="mt-5 font-bold hover:cursor-pointer underline text-[1.3vw] text-purple-800">Go to Main Boards</p></Link>
      </div>


    </div>
  );
};

export default PageNotFound;
