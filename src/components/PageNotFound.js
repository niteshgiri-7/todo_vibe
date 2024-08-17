import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addShowItem } from "../utils/uiSlice";
const PageNotFound = () => {
  const selectedItem = useSelector((store) => store.uiSlice.showItem);
  const userExist = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const handleClick = () => {
    if (userExist && (selectedItem!=="Main Boards" || selectedItem!=="Settings") ) {
      dispatch(addShowItem("Main Boards"));
    }
    navigate("/dashboard");
  };
  return (
    <div className="w-full h-screen bg-gray-300 flex ">
      <div className="w-6/12 h-[50%] mx-auto my-[5%] text-center">
        <h1 className="text-[7vw]">404</h1>
        <p className="px-4 py-2 font-bold text-[2vw]">
          Page not found or under development!
        </p>
 
          <p className="mt-5 font-bold hover:cursor-pointer underline text-[1.3vw] text-purple-800 hover:cursor-pointer" onClick={()=>{handleClick()}}>
            Go to Main Boards
          </p>

      </div>
    </div>
  );
};

export default PageNotFound;
