import { useMutation } from "@tanstack/react-query";
import { signUp } from "../queries/userAuth";
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
  const navigate = useNavigate("/");
  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      localStorage.setItem("authToken", data?.token);
      navigate("/dashboard");
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return mutation;
};

export default useSignUp;
