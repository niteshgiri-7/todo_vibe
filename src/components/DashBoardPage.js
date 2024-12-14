import React, { useEffect } from "react";
import Utils from "./Utils";
import MainBoard from "./MainBoard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Settings from "./Settings";
import Home from "./Home";
import Notes from "./Notes";
import Journal from "./Journal";
const DashBoardPage = () => {
  // const userExist = useSelector((store) => store.user.userHere);
  const selectedItem = useSelector((store) => store.uiSlice.showItem);

  return (
    <div className="flex ">
      <div className="min-w-[12vw]">
        <Utils />
      </div>
      {selectedItem === "Main Boards" && <MainBoard />}
      {selectedItem === "Settings" && <Settings />}
      {selectedItem === "Home" && <Home />}

      {selectedItem === "Notes" && <Notes />}

      {selectedItem === "Journal" && <Journal />}
    </div>
  );
};

export default DashBoardPage;
