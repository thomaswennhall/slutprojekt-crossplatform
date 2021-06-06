import styled from "styled-components/native";
import { theme as themeType } from "../theme";
export const CardWrapper = styled.View`
  display: flex;
  background-color: ${({ theme }) =>
    theme.background ? theme.background : themeType.colors.primary};
  color: ${(theme) =>
    theme.color ? theme.color : themeType.colors.accentDark};
`;

export const CardHeader = styled(CardWrapper)`
  flex-direction: row;
  padding: 24px 16px;
  align-items: ${(theme) => (theme.alignItems ? theme.alignItems : "center")};
  justify-content: ${({ theme }) =>
    theme.justifyContent ? theme.justifyContent : "space-around"};
`;

export const CardContent = styled(CardHeader)`
  flex-direction: ${({ theme }) =>
    theme.flexDirection ? theme.flexDirection : "column"};
  flex-grow: 1;
`;

export const CardFooter = styled(CardHeader)`
  padding: 0;
  border-style: solid;
  border-width: 3px;
  border-color: rgba(0, 0, 0, 0.15);
`;
