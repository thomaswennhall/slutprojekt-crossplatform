import React from "react";
import { MessageContentContainer, MessageContentText } from "@/styles/messages";

const MessageContent = ({ content }) => {
   return (
      <MessageContentContainer theme={{ background: "#FDF0E9" }}>
         <MessageContentText>{content}</MessageContentText>
      </MessageContentContainer>
   );
};

export default MessageContent;
