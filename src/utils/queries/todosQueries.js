import Axios from "../axios";

const getToken = () => {
  return (
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken")
  );
};

export const fetchTodos = async () => {
  const token = `Bearer ${getToken()}`;
  if (!token) return;
  console.log("fetching");
  console.log(token);
  try {
    const { data } = await Axios.get("/tasks", {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error?.response?.data?.error || "Failed to fetch todos");
  }
};

export const addTodos = async ({ title, description }) => {
  const token = `Bearer ${getToken()}`;
  try {
    const { data } = await Axios.post(
      "/tasks",
      { title, description },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return data;
  } catch (error) {
    throw new Error(error?.response?.data?.error || "Failed to add todos");
  }
};

export const editTodos = async ({ id, title, description }) => {
  const token = `Bearer ${getToken()}`;
  try {
    const { data } = await Axios.put(
      `/tasks/${id}`,
      { title, description },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return data;
  } catch (error) {
    throw new Error(error?.response?.data?.error || "Failed to edit");
  }
};

export const deleteTodo = async (id) => {
  const token = `Bearer ${getToken()}`;
  try {
    const { data } = await Axios.delete(`/tasks/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error?.response?.data?.error || "Failed to delete");
  }
};
