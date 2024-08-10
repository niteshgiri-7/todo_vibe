import { useEffect } from "react";
import { useSelector } from "react-redux";
const useAddNewTask = (topic, text) => {
  const addTask = useSelector((store) => store.taskSlice.addTaskBoolean);

  useEffect(() => {
    handleAdd(topic, text);
  },[addTask]);
  const handleAdd = async (topic, text) => {
    const title = topic.current.value;
    const description = text.current.value;
    if (!title || !description) return null;
    const URL = "/tasks";
    const token = localStorage.getItem("authToken");
    const requestBody = {
      title: title,
      description: description,
    };

    console.log("waiting for server");
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
