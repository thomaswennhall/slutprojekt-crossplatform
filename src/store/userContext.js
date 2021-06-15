import React, { useState } from "react";
import * as API from "../api/index";
const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
   const [user, setUser] = useState({});
   const [clients, setClients] = useState([]);
   const setUserProfile = async (token) => {
      const res = await API.getUserProfile(token);
      setUser(res);
   };
   const updateUserProfile = async (token, username, password, firstName, lastName) => {
      await API.editUserProfile(token, username, password, firstName, lastName);
      setUserProfile(token);
   };
   const newTask = async (token, title, content, clientId) => {
      const newTask = await API.newTask(token, title, content, clientId);
      setUser({ ...user, tasks: [...user.tasks, newTask] });
   };
   const setClientList = async (token) => {
      const allClients = await API.getClients(token);
      setClients([...allClients]);
   };
   const clearUser = () => setUser({});
   const findTaskById = (id) => {
      return user.tasks.find((task) => task._id === id);
   };
   const editTask = async (token, taskId, taskTitle, taskContent, taskStatus) => {
      await API.editTask(token, taskId, taskTitle, taskContent, taskStatus);
      // const findTask = user.tasks.find((task) => task._id === editTheTask);
      setUserProfile(token);
   };
   const uploadImage = async (token, taskId, data) => {
      const res = await API.uploadImage(token, taskId, data);
      setUser({
         ...user,
         tasks: user.tasks.map((task) =>
            task._id === taskId ? { ...task, image: res.data } : task
         ),
      });
   };
   return (
      <UserContext.Provider
         value={{
            user,
            setUserProfile,
            clearUser,
            findTaskById,
            newTask,
            setClientList,
            clients,
            editTask,
            uploadImage,
            updateUserProfile,
         }}
      >
         {children}
      </UserContext.Provider>
   );
};

export { UserContextProvider, UserContext };
