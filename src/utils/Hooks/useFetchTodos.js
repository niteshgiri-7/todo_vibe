import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../queries/todosQueries";
import { toast } from "react-toastify";

const useFetchTodos = () => {
  const {
    data: todos,
    error,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    onSuccess: (todos) => {
    },
    onError: (error) => {
      toast.error("Sorry! Something went wrong.");
    },
  });
  return { todos, error, isError };
};

export default useFetchTodos;
