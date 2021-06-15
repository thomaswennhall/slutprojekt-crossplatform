import React, { useContext, useEffect, useState } from "react";
import MessagesList from "@/components/messages/messages-list.component";
import { UserContext } from "@/store/userContext";
import { AuthContext } from "@/store/authContext";
const TaskMessages = ({ route }) => {
   const { taskId } = route.params;
   const [messages, setMessages] = useState([]);
   const { getSortedMessages, populateMessages, user } = useContext(UserContext);
   const { token } = useContext(AuthContext);
   useEffect(() => {
      const initMessages = async () => {
         try {
            const res = await populateMessages(token, taskId);
            setMessages([...res]);
         } catch (err) {
            throw new Error.message(err);
         }
      };
      initMessages();
   }, []);

   return <MessagesList data={messages} />;
};

export default TaskMessages;
