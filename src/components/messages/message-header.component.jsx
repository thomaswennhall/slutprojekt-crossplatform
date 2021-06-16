import React, { useContext, useState } from "react";

import { MessageHeaderContainer, MessageTitle, MessageAuthor } from "@/styles/messages";
import { Portrait } from "@/styles";
import { ThemeContext } from "styled-components";
import { UserContext } from "../../store/userContext";
const MessageHeader = ({ author, title }) => {
   const themeContext = useContext(ThemeContext);
   const { user } = useContext(UserContext);
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
            background: "#FDF0E9",
         }}
      >
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
            <MessageAuthor theme={{ color: "#fff" }}>
               {authorFirstChar(author)}
            </MessageAuthor>
         </Portrait>
      </MessageHeaderContainer>
   );
};

export default MessageHeader;
