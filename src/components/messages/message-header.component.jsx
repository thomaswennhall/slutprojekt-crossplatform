import React, { useContext, useState } from "react";

import { MessageHeaderContainer, MessageTitle, MessageAuthor } from "@/styles/messages";
import { Portrait } from "@/styles";
import { ThemeContext } from "styled-components";
import { Dimensions } from "react-native";
import MessageCheckbox from "./message-checkbox.component";

const MessageHeader = ({ author, title }) => {
   const themeContext = useContext(ThemeContext);
   const [user, setUser] = useState({
      username: "test-user",
   });
   const portraitColor = (author) =>
      author === user.username && author
         ? themeContext.colors.accentBlue
         : themeContext.colors.accentLightRed;
   const authorFirstChar = (author) => {
      return author ? author.substring(0, 1).toUpperCase() : "";
   };

   return (
      <MessageHeaderContainer
         theme={{
            flexDirection: "row",
            justifyContent: "center",
            padding: `0 ${themeContext.spacing.la}`,
            width: Dimensions.get("window").width + "px",
         }}
      >
         <MessageCheckbox read={true} />
         <MessageTitle theme={{ fontSize: themeContext.fontSizes.me }}>
            {title}
         </MessageTitle>
         <Portrait
            theme={{
               background: portraitColor(author),
               height: "50px",
               width: "50px",
            }}
         >
            <MessageAuthor>{authorFirstChar(author)}</MessageAuthor>
         </Portrait>
      </MessageHeaderContainer>
   );
};

export default MessageHeader;
