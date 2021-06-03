import React, {useContext} from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import styled, {ThemeContext} from 'styled-components/native'

const StyledButton = styled.TouchableOpacity`
  background: ${props => props.theme.backgroundColor || 'green'};
  padding: 16px 24px;
  border-radius: 8px;
  align-self: ${props => props.theme.alignSelf || 'center'};
  width: ${props => props.theme.width || 'auto'};
`

const ButtonText = styled.Text`
color: white;
font-weight: 700;
font-size: 14px;
text-align: center;
`

const Button = ({
  text,
  color,
  pressHandler,
  alignSelf,
  width
 /*  dashboardButton,
  logoutButton,
  saveButton */
}) => {

  const themeContext = useContext(ThemeContext)

  const theme = {
    backgroundColor: themeContext.colors[color],
    alignSelf,
    width
  }
  
  return (
    <StyledButton theme={theme} onPress={pressHandler} >
      <ButtonText >{text}</ButtonText>
    </StyledButton>
  );
};

/* style={[
  styles.button,
  styles[color],
  dashboardButton ? styles.dashboardButton : "",
  logoutButton ? styles.logoutButton : "",
  saveButton ? styles.saveButton : "",
]} */

/* const styles = StyleSheet.create({

  dashboardButton: {
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
    minWidth: "50%",
  },
  logoutButton: {
    alignSelf: "center",
    borderRadius: 10,
    padding: 20,
    minWidth: "50%",
  },
  saveButton: {
    alignSelf: "center",
    width: "100%",
  }
}); */

export default Button;
