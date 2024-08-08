import React from "react";
import Utils from "./Utils";
import Home from "./MainBoard";

const DashBoardPage = () => {
  return <div className="flex">
    <div className="w-[12vw]">
    <Utils/>
    </div>
    <Home/>
    </div>;
};

export default DashBoardPage;
