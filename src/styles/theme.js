import React from 'react'
import { ThemeProvider } from 'styled-components/native'

export const theme = {
  colors: {
    blue: '#0f55df',
    red: '#eb5757',
    lightRed: '#fb7851',
    black: '#091832',
    yellow: '#F8CC44',
    gray: '#7B7B7B'
  },
  spacing: {
    sm: '8px',
    me: '16px',
    la: '32px'
  }
}

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
