import { FC } from 'react';
import { Box, styled } from '@mui/material';

import ChatList from './ChatList';

interface IChatsProps {
   [key: string]: unknown;
}

const StyledChats = styled(Box)(() => ({}));

const Chats: FC<IChatsProps> = () => {
   return (
      <StyledChats>
         <ChatList />
      </StyledChats>
   );
};

export default Chats;
