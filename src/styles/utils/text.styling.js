import styled from "styled-components";
import { theme as themeType } from "../theme";
export const Text = styled.Text`
  /* font-family: ${({ theme }) =>
    theme.font ? theme.font : themeType.fonts.text}; */
  font-size: ${({ theme }) => (theme.fontSize ? theme.fontSize : 16)};
  color: ${({ theme }) =>
    theme.color ? theme.color : themeType.colors.accentDark};
`;
