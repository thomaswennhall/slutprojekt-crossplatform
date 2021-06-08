import React from "react";
import { MessageFooterContainer, MessageDate } from "@/styles/messages";

const MessageFooter = ({ date }) => {
  return (
    <MessageFooterContainer theme={{ padding: "10px 30px" }}>
      <MessageDate theme={{ alignSelf: "flex-end", fontSize: "12px" }}>
        {date.toString().split(" GMT")[0]}
      </MessageDate>
    </MessageFooterContainer>
  );
};

export default MessageFooter;
