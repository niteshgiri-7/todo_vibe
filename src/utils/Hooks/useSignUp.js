import { useMutation } from "@tanstack/react-query";
import { signUp } from "../queries/userAuth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { rememberMe } from "../context/context";
import { fetchTodos } from "../queries/todosQueries";

const useSignUp = () => {
  const { isRemembered } = useContext(rememberMe);

  const navigate = useNavigate("/");
  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      isRemembered
        ? localStorage.setItem("authToken", data?.token)
        : sessionStorage.setItem("authToken", data?.token);
      localStorage.setItem("username", data?.username);
      if (
        localStorage.getItem("authToken") ||
        sessionStorage.getItem("authToken")
      ) {
        navigate("/dashboard");
        fetchTodos();
      }
    },
    onError: (error) => {
      throw new Error(error?.response?.data?.error || "Couldn't Sign Up");
    },
  });
  const register = mutation.mutate;
  const clearMutationStates = mutation.reset;
  const registrationPending = mutation.isPending;
  return { register, clearMutationStates, registrationPending };
};

export default useSignUp;
