import React, { useState } from "react";
import * as API from "../api/index";
const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const setUserProfile = async (token) => {
    const res = await API.getUserProfile(token);
    setUser(res);
  };
  const clearUser = () => setUser({});
  return (
    <UserContext.Provider value={{ user, setUserProfile, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
