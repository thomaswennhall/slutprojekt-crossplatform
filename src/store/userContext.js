import React, { useState } from "react";
import * as API from "../api/index";
const UserContext = React.createContext();

randomReadMessage = () => Math.floor(Math.random() * 2);

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
      await API.uploadImage(token, taskId, data);
   };

   const populateTaskMessages = (taskId, messages) =>
      user.tasks.map((task) => (task._id === taskId ? { ...task, messages } : task));

   const populateMessages = async (token, taskId) => {
      try {
         let messages = await API.getMessages(token, taskId);
         setUser({ ...user, tasks: populateTaskMessages(taskId, messages) });
         return messages;
      } catch (err) {
         throw new Error.message(err);
      }
   };

   const getSortedMessages = (taskId) =>
      user.messages.sort((a, b) => !a.read || a.updatedAt > b.updatedAt);
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
            populateMessages,
            getSortedMessages,
         }}
      >
         {children}
      </UserContext.Provider>
   );
};

export { UserContextProvider, UserContext };
