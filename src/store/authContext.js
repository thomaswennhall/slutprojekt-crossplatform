import React, { useState } from "react";
import * as API from "../api/index";
const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const signIn = async (username, password) => {
    try {
      const token = await API.signIn(username, password);
      setToken(token);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const clearToken = () => setToken("");

  return (
    <AuthContext.Provider value={{ token, signIn, clearToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
