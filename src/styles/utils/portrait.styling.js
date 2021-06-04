import styled from "styled-components";
import { theme as themeType } from "../theme";

export const Portrait = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  height: ${({ theme }) => (theme.height ? theme.height : `${50}px`)};
  width: ${({ theme }) => (theme.width ? theme.width : `${50}px`)};
  background-color: ${({ theme }) =>
    theme.background ? theme.background : themeType.colors.accentLightRed};
  padding: ${({ theme }) =>
    theme.padding ? (theme.padding.y, theme.padding.x) : themeType.spacing.sm};
  color: ${(theme) =>
    theme.color ? theme.color : themeType.colors.accentDark};
`;
