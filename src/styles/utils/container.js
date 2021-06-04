import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
`;

export const ColumnContainer = styled(Container)`
  flex-direction: column;
  justify-content: ${({ theme }) => theme.justifyContent || "space-around"};
`;
export const RowContainer = styled(Container)`
  flex-direction: "row";
  justify-content: ${({ theme }) => theme.justifyContent || "space-around"};
`;
