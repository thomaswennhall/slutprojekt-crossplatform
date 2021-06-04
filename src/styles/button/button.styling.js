import styled from 'styled-components/native'

export const StyledButton = styled.TouchableOpacity`
  background: ${props => props.theme.backgroundColor || 'green'};
  padding: 16px 24px;
  border-radius: 8px;
  align-self: ${props => props.theme.alignSelf || 'center'};
  width: ${props => props.theme.width || 'auto'};
`

export const StyledButtonText = styled.Text`
  color: white;
  font-family: NotoSansJP_700Bold;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
`
/* 
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
` */
