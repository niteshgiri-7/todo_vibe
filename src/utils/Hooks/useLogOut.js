import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addShowItem } from "../uiSlice";
import { useQueryClient } from "@tanstack/react-query";

const useLogout = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    dispatch(addShowItem("Main Boards")); //when user logsin again,dashboard has MainBoard opened
    localStorage.clear();
    sessionStorage.clear();
    queryClient.removeQueries();
    navigate("/");
  };
  return { logOut };
};

export default useLogout;
