import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addShowItem } from "../uiSlice";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    dispatch(addShowItem("Main Boards"));
    localStorage.removeItem("authToken");
    localStorage.removeItem("username")
    sessionStorage.removeItem("authToken");
    navigate("/");
  };
  return { logOut };
};

export default useLogout;
