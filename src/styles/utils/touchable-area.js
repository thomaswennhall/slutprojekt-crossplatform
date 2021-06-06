import styled from "styled-components";
import { theme as themeTyped } from "../theme";
import { Text } from "./text.styling";
export const TouchableAreaOpacity = styled.TouchableOpacity`
  background: ${({ theme }) =>
    theme.background ? theme.background : themeTyped.colors.accentBlue};
  padding: 16px 24px;
  border-radius: ${({ theme }) =>
    theme.borderRadius ? theme.borderRadius : "8px"};
  align-self: ${({ theme }) => theme.alignSelf || "center"};
  min-width: 100px;
`;

export const TouchableAreaText = styled(Text)`
  font-weight: bold;
`;
