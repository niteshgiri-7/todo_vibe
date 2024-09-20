import { useState } from "react";
import { BASE_URL } from "../constants";

const useEditFetchTask = (title, description) => {
  const authToken = localStorage.getItem("authToken");

  const [header, setTitle] = useState("");
  const [descrip, setDescription] = useState("");
  const handleEditFetch = async (id) => {
    console.log("edit button clicked");
    const URL = BASE_URL + `/tasks/${id}`;
    try {
      console.log("waiting edit server");
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log("edit server responded");
      const json = await response.json();
      setTitle(json?.title);
      setDescription(json?.description);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditPut = async (id, newTitle, newDescription) => {
    const URL = BASE_URL+`/tasks/${id}`;
    const requestBody = {
      title: newTitle,
      description: newDescription,
    };
    console.log(requestBody);
    console.log(URL)
    console.log("waiting edit done server");
    try {
      const response = await fetch(URL, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(requestBody),
      });
      console.log("edit done server responded");
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };
  return { handleEditFetch, handleEditPut, header, descrip };
};

export default useEditFetchTask;
