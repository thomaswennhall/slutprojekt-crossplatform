import React, {useContext} from "react";
import { View, StyleSheet } from "react-native";
import {ThemeContext} from 'styled-components/native'
import {Label} from '@/styles/text/label.styling'
import {TextInput} from '@/styles/input/textInput.styling'

const Input = ({ label, secureInput, placeholder, inputHandler, color }) => {
  const themeContext = useContext(ThemeContext)

  const theme = {
    backgroundColor: themeContext.colors[color]
  }
  return (
      <View>
         {label && <Label>{label}</Label>}
         <TextInput
            secureTextEntry={secureInput}
            placeholder={placeholder}
            onChangeText={inputHandler}
            autoCapitalize="none"
            theme={theme}
         />
      </View>
   );
};

export default Input
