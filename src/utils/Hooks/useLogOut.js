import { useDispatch } from "react-redux";
import { removeUser } from "../userSlice";

const useLogout = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    console.log("clicked\n removing user");
    dispatch(removeUser());
  };
  return { logOut };
};

export default useLogout;
