import React, { useContext, useEffect } from "react";
import MessagesList from "@/components/messages/messages-list.component";
import { UserContext } from "@/store/userContext";
import { AuthContext } from "@/store/authContext";
const TaskMessages = () => {
  const { getSortedMessages, populateMessages, user } = useContext(UserContext);
  const { token } = useContext(AuthContext);
  useEffect(() => {
    const initMessages = async () => {
      await populateMessages(token, "60c799a8f7acc9b3612dfead");
    };
    initMessages();
  }, []);
  return <MessagesList data={getSortedMessages} />;
};

export default TaskMessages;
