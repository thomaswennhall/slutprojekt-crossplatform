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

export const MessageWrapper = styled(Container)`
   border-radius: 8px;
`;

export const MessageHeaderContainer = styled(Container)`
   justify-content: space-between;
   flex-shrink: 1;
`;

export const MessageContentContainer = styled(Container)``;

export const MessageFooterContainer = styled(Container)``;
