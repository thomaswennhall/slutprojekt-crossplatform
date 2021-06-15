import React, { useContext, useEffect, useState } from "react";
import MessagesList from "@/components/messages/messages-list.component";
import { UserContext } from "@/store/userContext";
import { AuthContext } from "@/store/authContext";
const TaskMessages = () => {
   const [messages, setMessages] = useState([]);
   const { getSortedMessages, populateMessages, user } = useContext(UserContext);
   const { token } = useContext(AuthContext);
   useEffect(() => {
      const initMessages = async () => {
         try {
            const res = await populateMessages(token, "60c872a1eb57070277b8c2f5");
            const task = user.tasks.filter(
               (task) => task._id === "60c872a1eb57070277b8c2f5"
            );
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
