import React, { useState } from "react";
import { TouchableAreaOpacity } from "@/styles";
import SwipeableGesture from "../gestures/swipeable";
import { MessageWrapper } from "@/styles/messages";

import MessageHeader from "./message-header.component";
import MessageActionPanel from "./message-action-panel.component";
import MessageContent from "./message-content.component";
import MessageFooter from "./messages-footer.component";
const MessagesListItem = ({ author, title, content, updatedAt, _id, taskId }) => {
   const [toggleContent, setToggleContent] = useState(false);
   const showHideContent = () => {
      setToggleContent(!toggleContent);
   };

   return (
      <SwipeableGesture
         rightActionHandler={() => <MessageActionPanel messageId={_id} taskId={taskId} />}
      >
         <MessageWrapper
            theme={{
               width: "90%",
               padding: "16px",
               margin: "16px auto",
            }}
         >
            <TouchableAreaOpacity
               onPress={showHideContent}
               theme={{ background: "#FDF0E9" }}
            >
               <MessageHeader author={author} title={title} />
               {toggleContent && <MessageContent content={content} />}
               <MessageFooter date={updatedAt} />
            </TouchableAreaOpacity>
         </MessageWrapper>
      </SwipeableGesture>
   );
};

export default MessagesListItem;
