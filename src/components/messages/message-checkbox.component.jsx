import React from "react";
import { CheckBoxContainer } from "@/styles/inputs";
const MessageCheckbox = ({ read }) => (
  <CheckBoxContainer
    theme={{ background: read && "black", padding: "10px" }}
  ></CheckBoxContainer>
);

export default MessageCheckbox;
