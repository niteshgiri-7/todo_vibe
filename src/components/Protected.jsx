import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken")
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(
        localStorage.getItem("authToken") || sessionStorage.getItem("authToken")
      );
    };
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return token ? children : <Navigate to="/" />;
};

export default Protected;
