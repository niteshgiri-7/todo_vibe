import { useMutation } from "@tanstack/react-query";
import { login } from "../queries/userAuth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { rememberMe } from "../context/context";
import { fetchTodos } from "../queries/todosQueries";

const useLogin = () => {
  const { isRemembered } = useContext(rememberMe);
  const navigate = useNavigate();
  const { data, error, isPending, mutate, reset } = useMutation({
    mutationFn: login,
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
    onError: (error) => {},
  });
  const signIn = mutate;
  return { data, error, isPending, signIn, reset };
};

export default useLogin;
