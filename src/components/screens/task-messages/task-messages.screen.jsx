import React, { useContext, useEffect, useState } from "react";
import MessagesList from "@/components/messages/messages-list.component";
import { UserContext } from "@/store/userContext";
import { AuthContext } from "@/store/authContext";
const TaskMessages = ({ route }) => {
   const { taskId } = route.params;
   const [messages, setMessages] = useState([]);
   const { populateMessages, user } = useContext(UserContext);
   const { token } = useContext(AuthContext);
   useEffect(() => {
      const initMessages = async () => {
         try {
            await populateMessages(token, taskId);
         } catch (err) {
            throw new Error.message(err);
         }
      };
      initMessages();
   }, []);

   return (
      <MessagesList
         data={user.tasks.find((task) => task._id === taskId).messages}
         taskId={taskId}
      />
   );
};

export default TaskMessages;
