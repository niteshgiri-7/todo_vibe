import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../constants";
const useAddNewTask = (topic, text) => {
  const { taskBoolean } = useSelector((store) => store.taskSlice);

  useEffect(() => {
    handleAdd(topic, text);
  }, [taskBoolean]);
  const handleAdd = async (topic, text) => {
    const title = topic.current.value;
    const description = text.current.value;
    if (title.trim().length === 0 || description.trim().length === 0) {
      console.log("cannot have null value");
      return null;
    }
    const URL = BASE_URL+"/tasks";
    const token = localStorage.getItem("authToken");
    const requestBody = {
      title: title,
      description: description,
    };

    console.log("waiting for adding server");
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });
      console.log("server responded");
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error.message);
    }
  };
};
export default useAddNewTask;
