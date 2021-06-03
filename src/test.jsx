import React, {useContext} from "react";
import {SafeAreaView, Text} from 'react-native' 
import {Title, Card} from '@/styles/global'
import {ButtonBase} from '@/styles/button/button.styling'
import {ThemeContext} from 'styled-components/native'

const Test = ({color, alignSelf}) => {
  const themeContext = useContext(ThemeContext)

  return (
    <SafeAreaView >
      <Card >
        <Title>HALLÅ VÄRLD</Title>
      </Card>
      <Card >
          <ButtonBase theme={{
            backgroundColor: themeContext.colors[color],
            alignSelf
            }} >
            <Text>KLICKA</Text>
          </ButtonBase>
      </Card>
    </ SafeAreaView>
  )
}

export default Test;
