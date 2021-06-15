import React from "react";
import { MessageContentContainer, MessageContentText } from "@/styles/messages";

const MessageContent = ({ content }) => {
   return (
      <MessageContentContainer>
         <MessageContentText>{content}</MessageContentText>
      </MessageContentContainer>
   );
};

export default MessageContent;
