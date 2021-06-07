import styled from "styled-components";
import { Text } from "../utils/text.styling";
import { Container } from "../utils/container.styling";

export const MessageAuthor = styled(Text)`
  font-weight: bold;
`;
export const MessageTitle = styled(Text)`
  font-weight: bold;
`;

export const MessageContentText = styled(Text)``;

export const MessageDate = styled(Text)`
  font-weight: bold;
`;
export const MessageFooter = styled(Text)``;

export const MessageWrapper = styled(Container)``;

export const MessageHeaderContainer = styled(Container)`
  justify-content: space-between;
  flex-shrink: 1;
`;

export const MessageContentContainer = styled(Container)``;

export const MessageFooterContainer = styled(Container)`
  border-bottom-color: rgba(0, 0, 0, 0.3);
  border-bottom-width: 3px;
  border-style: solid;
`;
