import React from "react";
import { MessageFooterContainer, MessageDate } from "@/styles/messages";

const MessageFooter = ({ date }) => {
   const splitDateNTime = (dateNTime) => {
      return dateNTime.split("T")[0];
   };
   return (
      <MessageFooterContainer theme={{ padding: "10px 30px", background: "#FDF0E9" }}>
         <MessageDate theme={{ alignSelf: "flex-end", fontSize: "12px" }}>
            {splitDateNTime(date)}
         </MessageDate>
      </MessageFooterContainer>
   );
};

export default MessageFooter;
