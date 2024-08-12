import React, { useEffect } from "react";
import Utils from "./Utils";
import MainBoard from "./MainBoard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Settings from "./Settings";

const DashBoardPage = () => {
  const userExist = useSelector((store) => store.user);
  const selectedItem = useSelector((store) => store.uiSlice.showItem);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userExist) {
      navigate("/login");
    }
  }, [userExist, navigate]);
  if(!userExist) return null;
  return (
    <div className="flex ">
      <div className="min-w-[12vw]">
        <Utils />
      </div>
     {selectedItem ==="Main Boards" && <MainBoard />}
     {selectedItem==="Settings" && <Settings/>}
    </div>
  );
  // return (

  //     <div className="flex">
  //       <div className="w-[12vw]">
  //         <Utils />
  //       </div>
  //       <MainBoard />
  //     </div>

  // )
};

export default DashBoardPage;
