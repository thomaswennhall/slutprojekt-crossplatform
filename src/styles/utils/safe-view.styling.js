import styled from "styled-components/native";

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background: ${(theme) => (theme.background ? theme.background : "#E5E5E5")};
`;
