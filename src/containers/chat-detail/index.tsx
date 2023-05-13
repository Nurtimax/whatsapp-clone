import { FC } from 'react';
import { Box, styled } from '@mui/material';

interface IChatDetailProps {
   [key: string]: unknown;
}

const StyledChatDetail = styled(Box)(() => ({}));

const ChatDetail: FC<IChatDetailProps> = () => {
   return <StyledChatDetail>ChatDetail</StyledChatDetail>;
};

export default ChatDetail;
