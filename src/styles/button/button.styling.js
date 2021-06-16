import React from 'react'
import styled from 'styled-components/native'
import { ThemeProvider } from 'styled-components/native'

export const theme = {
  blueBg: '#0f55df',
  redBg: '#eb5757'
}

export const ButtonBase = styled.TouchableOpacity`
  background: ${props => props.theme.backgroundColor};
  padding: 16px 24px;
  border-radius: 8px;
  align-self: ${props => props.theme.alignSelf || 'center'};
`

export const BlueButton = styled(ButtonBase)`
  background-color: #0f55df;
`

export const RedButton = styled(ButtonBase)`
  background-color: #eb5757;
`

export const LightRedButton = styled(ButtonBase)`
  background-color: #fb7851;
`

export const BlackButton = styled(ButtonBase)`
  background-color: #091832;
`

export const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
