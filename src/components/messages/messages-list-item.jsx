import React, { useContext, useState } from "react";
import {
  CardWrapper,
  CardHeader,
  Portrait,
  CardContent,
  CardFooter,
  TouchableAreaOpacity,
} from "@/styles";
import { MessageAuthor, MessageTitle } from "@/styles/messages";
import { ThemeContext } from "styled-components";
import SwipeableGesture from "../gestures/swipeable";
import MessageActionPanel from "./message-action-panel";

const MessagesListItem = ({ author, title, content }) => {
  const authorFirstChar = (author) => {
    return author.substring(0, 1).toUpperCase();
  };

  const [user, setUser] = useState({
    username: "test-user",
  });
  const [toggleContent, setToggleContent] = useState(false);

  const showHideContent = () => {
    setToggleContent(!toggleContent);
  };

  const themeContext = useContext(ThemeContext);

  const portraitColor = (author) =>
    author === user.username
      ? themeContext.colors.accentBlue
      : themeContext.colors.accentLightRed;

  return (
    <CardWrapper>
      <SwipeableGesture rightActionHandler={() => <MessageActionPanel />}>
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
        <TouchableAreaOpacity onPress={showHideContent}>
          {toggleContent && (
            <CardContent>
              <MessageAuthor>{content}</MessageAuthor>
            </CardContent>
          )}
        </TouchableAreaOpacity>
        <CardFooter></CardFooter>
      </SwipeableGesture>
    </CardWrapper>
  );
};

export default MessagesListItem;
