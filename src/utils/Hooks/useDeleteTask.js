import { BASE_URL } from "../constants";


const useDeleteTask = () => {

  const handleDelete = async (id) => {
    const URL = BASE_URL+`/tasks/${id}`;
    const authToken = localStorage.getItem("authToken");
    try {
      const response = await fetch(URL, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log("server responded while deleting");
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };
  return {handleDelete};
};

export default useDeleteTask;
