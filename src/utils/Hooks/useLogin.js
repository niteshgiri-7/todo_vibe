import { useMutation } from "@tanstack/react-query";
import { login } from "../queries/userAuth";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();
  const { data, error, isPending, mutate,reset } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
        localStorage.setItem("authToken",data?.token)
        navigate("/dashboard")
        console.log(data.message)
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
  return { data, error, isPending, mutate,reset };
};

export default useLogin;
