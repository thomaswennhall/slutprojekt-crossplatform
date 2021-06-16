import { theme as themeType } from "./theme";

const defaultValues = {
   padding: themeType.spacing.sm,
   margin: themeType.spacing.sm,
   flex: {
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
   },
   color: themeType.colors.accentDark,
   background: "#fff",
   fontSize: themeType.fontSizes.default,
   dimensions: {
      height: "auto",
      width: "100%",
      borderRadius: "0px",
   },
};

export const padding = ({ theme }) =>
   theme.padding ? theme.padding : defaultValues.padding;

export const margin = ({ theme }) => (theme.margin ? theme.margin : defaultValues.margin);

export const flexAlignItems = ({ theme }) =>
   theme.alignItems ? theme.alignItems : defaultValues.flex.alignItems;

export const flexJustifyContent = ({ theme }) =>
   theme.justifyContent ? theme.justifyContent : defaultValues.flex.justifyContent;

export const flexDirection = ({ theme }) =>
   theme.flexDirection ? theme.flexDirection : defaultValues.flex.flexDirection;

export const flexAlignSelf = ({ theme }) =>
   theme.alignSelf ? theme.alignSelf : defaultValues.flex.alignItems;

export const background = ({ theme }) =>
   theme.background ? theme.background : defaultValues.background;

export const color = ({ theme }) => (theme.color ? theme.color : defaultValues.color);

export const fontSize = ({ theme }) =>
   theme.fontSize ? theme.fontSize : defaultValues.fontSize;

export const height = ({ theme }) =>
   theme.height ? theme.height : defaultValues.dimensions.height;

export const width = ({ theme }) =>
   theme.width ? theme.width : defaultValues.dimensions.width;

export const borderRadius = ({ theme }) =>
   theme.width ? theme.borderRadius : defaultValues.dimensions.borderRadius;

export const debug = ({ theme }) => (theme.debug ? "2px solid red" : "none");
