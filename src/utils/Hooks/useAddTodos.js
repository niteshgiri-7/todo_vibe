import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodos } from "../queries/todosQueries";
import { toast } from "react-toastify";


const useAddTodos = () => {
  const queryclient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addTodos,
    onMutate: async (newTodo) => {
      const prevTodos = queryclient.getQueryData(["todos"]);
      queryclient.setQueryData(["todos"], (old) => [...old, newTodo]);
      return { prevTodos };
    },
    onError: (error, variables, context) => {
      queryclient.setQueryData(["todos"], context.prevTodos); // Rollback changes
      toast.error("Error occured while adding")
    },
    onSuccess: (data) => {
      queryclient.invalidateQueries({
        queryKey:["todos"],
        exact:true,
      })
      toast.success("Added successfully");
    },
  });
 const add = mutation.mutate;
  return { add };
};

export default useAddTodos;
