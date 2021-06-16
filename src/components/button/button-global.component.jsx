import React from "react";
import { TouchableAreaOpacity, TouchableAreaText } from "@/styles";

const Button = ({ onPressHandler, textStyling, containerStyling, text }) => (
  <TouchableAreaOpacity
    theme={{ ...containerStyling }}
    onPress={onPressHandler}
  >
    <TouchableAreaText theme={{ ...textStyling }}>{text}</TouchableAreaText>
  </TouchableAreaOpacity>
);

export default Button;
