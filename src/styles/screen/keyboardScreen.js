import styled from 'styled-components/native'

export const KeyboardScreen = styled.KeyboardAvoidingView`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => props.justifyContent || 'space-evenly'};
  background-color: #fff;
  height: 100%;
`
