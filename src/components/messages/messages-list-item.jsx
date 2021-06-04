import React, { useContext, useState } from "react";
import {
  CardWrapper,
  CardHeader,
  Portrait,
  CardContent,
  CardFooter,
} from "@/styles";
import { MessageAuthor, MessageTitle } from "@/styles/messages";
import { ThemeContext } from "styled-components";

const MessagesListItem = ({ author, title, content }) => {
  const authorFirstChar = (author) => {
    return author.substring(0, 1).toUpperCase();
  };

  const [user, setUser] = useState({
    username: "test-user",
  });

  const themeContext = useContext(ThemeContext);

  const portraitColor = (author) =>
    author === user.username
      ? themeContext.colors.accentBlue
      : themeContext.colors.accentLightRed;

  return (
    <CardWrapper>
      <CardHeader
        theme={{
          background: themeContext.colors.primary,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <MessageTitle theme={{ fontSize: "16px" }}>{title}</MessageTitle>
        <Portrait theme={{ background: portraitColor(author) }}>
          <MessageAuthor theme={{ fontSize: "18px" }}>
            {authorFirstChar(author)}
          </MessageAuthor>
        </Portrait>
      </CardHeader>
      <CardContent>
        <MessageAuthor>{content}</MessageAuthor>
      </CardContent>
      <CardFooter></CardFooter>
    </CardWrapper>
  );
};

export default MessagesListItem;
