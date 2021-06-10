import React, { useState } from "react";
import * as API from "../api/index";
const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
   const [user, setUser] = useState({});

   const setUserProfile = async (token) => {
      const res = await API.getUserProfile(token);
      setUser(res);
   };
   const newTask = async (token, title, content) => {
      const newTask = await API.newTask(token, title, content);
      setUser({ ...user, tasks: [...user.tasks, newTask] });
   };
   const clearUser = () => setUser({});
   const findTaskById = (id) => {
      return user.tasks.find((task) => task._id === id);
   };
   return (
      <UserContext.Provider
         value={{ user, setUserProfile, clearUser, findTaskById, newTask }}
      >
         {children}
      </UserContext.Provider>
   );
};

export { UserContextProvider, UserContext };
