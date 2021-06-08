import styled from "styled-components/native";
import {
  color,
  background,
  flexJustifyContent,
  flexAlignItems,
  flexDirection,
  margin,
  padding,
  height,
  width,
  debug,
} from "@/styles/styling.utils";

export const Container = styled.View`
  display: flex;
  color: ${(props) => color(props)};
  background: ${(props) => background(props)};
  justify-content: ${(props) => flexJustifyContent(props)};
  align-items: ${(props) => flexAlignItems(props)};
  padding: ${(props) => padding(props)};
  margin: ${(props) => margin(props)};
  flex-direction: ${(props) => flexDirection(props)};
  height: ${(props) => height(props)};
  width: ${(props) => width(props)};
  border: ${(props) => debug(props)};
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background: ${(props) => background(props)};
`;
