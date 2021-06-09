import styled from 'styled-components/native'

export const TextInput = styled.TextInput`
  background-color: ${props => props.theme.backgroundColor || '#F6F6F6'};
  color: ${props => props.theme.colors.black || '#000'};
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  height: 50px;
`
