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
    },
  });
  const register=mutation.mutate
  const clearMutationStates = mutation.reset;
  return {register,clearMutationStates};
};

export default useSignUp;
