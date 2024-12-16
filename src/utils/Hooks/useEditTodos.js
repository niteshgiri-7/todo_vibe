import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editTodos } from "../queries/todosQueries";
import { toast } from "react-toastify";

// const useEditTodos = (id) => {
//   const queryClient = useQueryClient();
//   const { data, mutate } = useMutation({
//     mutationFn: editTodos,
//     onMutate: async (afterEdit) => {
//       const prevTodos = queryClient.getQueryData(["todos"]);
//       console.log(prevTodos);
//       const beforeEdit = prevTodos.find((todo) => todo._id === id);
//       console.log(beforeEdit);
//       queryClient.setQueryData(["todos"], (oldData) => {
//         oldData?.map((old) => (old._id === id ? { ...old, afterEdit } : old));
//       });
//       console.log(queryClient.getQueryData(["todos"]));
//       return beforeEdit;
//     },
//     onError: (context, error) => {
//       console.log("error editing", error?.message);
//       queryClient.setQueryData(["todos"], (newData) =>
//         newData?.map((newTodo) =>
//           newTodo._id === id ? { ...newTodo, ...context.beforeEdit } : newTodo
//         )
//       );
//     },
//     onSuccess: () => {
//       toast.success("Todo updated");
//       console.log("edit success");
//     },
//   });
//   return { mutate };
// };

const useEditTodos = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: editTodos,
    onMutate: async ({ id, title, description }) => {
      const prevTodos = queryClient.getQueryData(["todos"]);
      // saving todos before modifying them,pachi error aayo vaney revert garna
      const beforeEdit = prevTodos.find((todo) => todo._id === id);

      queryClient.setQueryData(["todos"], (oldTodos) =>
        oldTodos?.map((oldTodo) =>
          oldTodo._id === id ? { ...oldTodo, title, description } : oldTodo
        )
      );
      return { beforeEdit };
    },
    onError: (error, _, context) => {
      // context ma modify hunu vanda agadi ko content cha,so todos bata tyo context ko id match garney ani todos ma tyo unmodified todo object lai spread operator use garera rakhney
      queryClient.setQueryData(["todos"], (oldData) =>
        oldData?.map((old) =>
          old._id === context.beforeEdit._id
            ? { ...old, ...context.beforeEdit }
            : old
        )
      );
      toast.error("Failed to edit");
    },
    onSuccess: () => {
      toast.success("Successfully updated!");
    },
  });
  const Update = mutation.mutate;
  return { Update };
};

export default useEditTodos;
