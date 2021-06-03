import React, { useState } from "react";
import * as API from "../api/index";
const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
   const [token, setToken] = useState("");
   const singIn = async (username, password) => {
      const token = await API.signIn(username, password);
      setToken(token);
   };
   return (
      <AuthContext.Provider value={{ token, singIn }}>{children}</AuthContext.Provider>
   );
};

export { AuthContextProvider, AuthContext };
