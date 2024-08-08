import React from "react";
import Utils from "./Utils";
import MainBoard from "./MainBoard";

const DashBoardPage = () => {
  return <div className="flex">
    <div className="w-[12vw]">
    <Utils/>
    </div>
    <MainBoard/>
    </div>;
};

export default DashBoardPage;
