import React, { useContext } from "react";
import { CardWrapper, CardContent } from "@/styles";
import Button from "../button/button-global.component";
import { ThemeContext } from "styled-components";
const MessageActionPanel = ({ theme }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <CardWrapper>
      <CardContent theme={{ justifyContent: "space-around" }}>
        <Button
          containerStyling={{
            background: themeContext.colors.accentYellow,
            borderRadius: "0",
          }}
          textStyling={{ color: themeContext.colors.accentDark }}
          text="Edit"
        />
        <Button
          containerStyling={{
            background: themeContext.colors.accentLightRed,
            borderRadius: "0",
          }}
          textStyling={{ color: "#fff" }}
          text="Delete"
        />
      </CardContent>
    </CardWrapper>
  );
};

export default MessageActionPanel;
