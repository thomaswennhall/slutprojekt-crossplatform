import React from "react";
import styled from "styled-components/native";
import { ThemeProvider } from "styled-components/native";

export const theme = {
  colors: {
    primary: "#E5E5E5",
    accentBlue: "#0f55df",
    accentRed: "#eb5757",
    accentLightRed: "#fb7851",
    accentDark: "#091832",
    accentYellow: "#F8CC44",
  },
  spacing: {
    sm: "8px",
    me: "16px",
    la: "32px",
  },
  fonts: {
    heading: "Tahoma",
    text: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
