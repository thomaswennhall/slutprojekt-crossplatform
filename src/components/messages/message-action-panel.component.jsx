import React, { useContext } from "react";
import Button from "../button/button-global.component";
import { ActionPanelWrapper } from "@/styles/action-panel";
import { ThemeContext } from "styled-components";
import { Dimensions, TouchableOpacity, Text } from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome5";
const MessageActionPanel = () => {
   const themeContext = useContext(ThemeContext);
   return (
      <ActionPanelWrapper
         theme={{
            width: Dimensions.get("window").width / 3 + "px",
            height: "150px",
            justifyContent: "space-between",
            margin: "auto 0",
         }}
      >
         <TouchableOpacity
            style={{
               backgroundColor: "#ff793f",
               paddingHorizontal: 32,
               paddingVertical: 16,
            }}
         >
            <IconFontAwesome name="pen" size={24} style={{ color: "#fff" }} />
         </TouchableOpacity>
         <TouchableOpacity
            style={{
               backgroundColor: "#ff5252",
               paddingHorizontal: 32,
               paddingVertical: 16,
            }}
         >
            <IconFontAwesome name="trash" size={24} style={{ color: "#fff" }} />
         </TouchableOpacity>
      </ActionPanelWrapper>
   );
   r;
};

export default MessageActionPanel;
