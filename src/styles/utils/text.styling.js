import styled from "styled-components";
import { color, fontSize, flexAlignSelf } from "@/styles/styling.utils";
export const Text = styled.Text`
  font-size: ${(props) => fontSize(props)};
  color: ${(props) => color(props)};
  align-self: ${(props) => flexAlignSelf(props)};
`;
