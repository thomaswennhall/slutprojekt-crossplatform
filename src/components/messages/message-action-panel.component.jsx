import React, { useContext } from "react";
import Button from "../button/button-global.component";
import { ActionPanelWrapper } from "@/styles/action-panel";
import { ThemeContext } from "styled-components";
import { Dimensions } from "react-native";

const MessageActionPanel = ({ theme }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <ActionPanelWrapper
      theme={{
        width: Dimensions.get("window").width / 3,
        justifyContent: "space-around",
      }}
    >
      <Button
        text="EDIT"
        containerStyling={{
          background: themeContext.colors.accentBlue,
          padding: themeContext.spacing.me,
        }}
        textStyling={{ color: "#fff" }}
      />
      <Button
        text="DELETE"
        containerStyling={{
          background: themeContext.colors.accentLightRed,
          padding: themeContext.spacing.me,
        }}
        textStyling={{ color: "#fff" }}
      />
    </ActionPanelWrapper>
  );
  r;
};

export default MessageActionPanel;
