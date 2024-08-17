import { useDispatch } from "react-redux";
import { logout } from "../userSlice";
import { useNavigate } from "react-router-dom";
import {  addShowItem } from "../uiSlice";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    console.log("clicked\n removing user");


    dispatch(addShowItem("Main Boards"));
    dispatch(logout());
    navigate("/");
  };
  return { logOut };
};

export default useLogout;
