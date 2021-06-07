import styled from "styled-components";
import { theme as themeTyped } from "../theme";
import { Text } from "./text.styling";
import {
  background,
  debug,
  padding,
  height,
  width,
  flexAlignItems,
  margin,
  flexDirection,
  flexJustifyContent,
  borderRadius,
} from "../styling.utils";
export const TouchableAreaOpacity = styled.TouchableOpacity`
  display: flex;
  background: ${(props) => background(props)};
  padding: ${(props) => padding(props)};
  margin: ${(props) => margin(props)};
  width: ${(props) => width(props)};
  height: ${(props) => height(props)};
  align-items: ${(props) => flexAlignItems(props)};
  flex-direction: ${(props) => flexDirection(props)};
  justify-content: ${(props) => flexJustifyContent(props)};
  border-radius: ${(props) => borderRadius(props)};
  border: ${(props) => debug(props)};
`;

export const TouchableAreaText = styled(Text)`
  font-weight: bold;
`;
