import React, {useContext} from "react";
import {ThemeContext} from 'styled-components/native'
import {StyledButton, StyledButtonText} from '@/styles/button/button.styling'

const Button = ({
  text,
  color,
  pressHandler,
  alignSelf,
  width
}) => {

  const themeContext = useContext(ThemeContext)

  const theme = {
    backgroundColor: themeContext.colors[color],
    alignSelf,
    width
  }
  
  return (
    <StyledButton theme={theme} onPress={pressHandler} >
      <StyledButtonText >{text}</StyledButtonText>
    </StyledButton>
  );
};

export default Button;
