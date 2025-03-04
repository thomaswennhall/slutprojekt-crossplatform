import React, { useState } from "react";
import * as API from "../api/index";
const UserContext = React.createContext();

randomReadMessage = () => Math.floor(Math.random() * 2);

const UserContextProvider = ({ children }) => {
   const [user, setUser] = useState({});
   const [clients, setClients] = useState([]);
   const [messages, setMessages] = useState([]);
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

   const populateTaskMessages = (taskId, messages) =>
      user.tasks.map((task) => (task._id === taskId ? { ...task, messages } : task));

   const populateMessages = async (token, taskId) => {
      try {
         let messages = await API.getMessages(token, taskId);
         setUser({ ...user, tasks: populateTaskMessages(taskId, messages) });
         return user.tasks.find((task) => task._id === taskId).messages;
      } catch (err) {
         throw new Error.message(err);
      }
   };
   const deleteMessage = async (token, taskId, messageId) => {
      try {
         await API.deleteMessage(token, taskId, messageId);
         setUserProfile(token);
      } catch (err) {
         throw new Error.message(err);
      }
   };
   const newMessages = async (token, taskId, title, content) => {
      try {
         await API.newMessage(token, taskId, title, content);
         setUserProfile(token);
      } catch (err) {
         throw new Error.message(err);
      }
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
            populateMessages,
            deleteMessage,
            newMessages,
         }}
      >
         {children}
      </UserContext.Provider>
   );
};

export { UserContextProvider, UserContext };
