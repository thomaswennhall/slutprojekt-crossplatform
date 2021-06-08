import React from "react";
import { CheckBoxContainer } from "@/styles/inputs";
import { AntDesign } from "@expo/vector-icons";
const MessageCheckbox = ({ read }) => (
  <CheckBoxContainer
    theme={{ background: read && "black" }}
  ></CheckBoxContainer>
);

export default MessageCheckbox;
