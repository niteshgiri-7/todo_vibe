import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskFromBackend } from "../tasksSlice";

const useFetchTask = () => {
  const dispatch = useDispatch();
  const addTaskBoolean = useSelector((store) => store.taskSlice.addTaskBoolean);
  useEffect(() => {
    fetchTask();
  }, [addTaskBoolean]);
  const fetchTask = async () => {
    const authToken = localStorage.getItem("authToken");
    const URL = "/tasks";
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log("server responded");
      const json = await response.json();
      console.log(json);
      dispatch(addTaskFromBackend(json));
      console.log("tasks added");
    } catch (error) {
      console.log(error);
    }
 
  };
};

export default useFetchTask;
