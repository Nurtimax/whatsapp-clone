import { FC } from 'react';
import { Box, styled } from '@mui/material';

interface IChatProps {
   [key: string]: unknown;
}

const StyledChat = styled(Box)(() => ({}));

const Chat: FC<IChatProps> = () => {
   return <StyledChat>Chat</StyledChat>;
};

export default Chat;
