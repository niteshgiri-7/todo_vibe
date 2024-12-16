import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../queries/todosQueries";
import { toast } from "react-toastify";

const useDeleteTodo = () => {

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteTodo,
    onMutate: async (id) => {
      const prevTodos = queryClient.getQueryData(["todos"]);
      const deletedTodo = prevTodos.find((todo) => todo._id === id);

      queryClient.setQueryData(["todos"], (old) =>
        old?.filter((todo) => todo._id !== id)
      );
      return { deletedTodo };
    },
    onError: (error, _, context) => {
      queryClient.setQueryData(["todos"], (old) => [
        ...old,
        context.deletedTodo,
      ]);
      toast.error("Couldn't delete")
    },
    onSuccess: () => {
      toast.success("Deleted successfully");
    },
  });
    const remove = mutation.mutate;
    return {remove}
};

export default useDeleteTodo;