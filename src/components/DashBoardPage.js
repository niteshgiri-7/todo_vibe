import React, { useEffect } from "react";
import Utils from "./Utils";
import MainBoard from "./MainBoard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DashBoardPage = () => {
  const userExist = useSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userExist) {
      navigate("/login");
    }
  });

  return (userExist)?(
    <div className="flex">
      <div className="w-[12vw]">
        <Utils />
      </div>
      <MainBoard />
    </div>
  ):null;
};

export default DashBoardPage;
