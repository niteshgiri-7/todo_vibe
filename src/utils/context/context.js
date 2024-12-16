// used for remember me functionality

import { createContext, useState } from "react";

export const rememberMe = createContext();

export const ContextProvider = ({ children }) => {
  const [isRemembered, setIsRemembered] = useState(false);
  const handleIsRemember = () => {
    setIsRemembered((prev) => !prev);
  };
  return (
    <rememberMe.Provider value={{ isRemembered, handleIsRemember}}>
      {children}
    </rememberMe.Provider>
  );
};
