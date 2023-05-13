import { FC } from 'react';
import { Box, styled } from '@mui/material';

import ChatItem from './ChatItem';

interface IChatListProps {
   [key: string]: unknown;
}

const StyledChatList = styled(Box)(() => ({
   padding: '.5rem 3px 0 5px',
   height: '92vh',
   overflow: 'auto'
}));

const ChatList: FC<IChatListProps> = () => {
   return (
      <StyledChatList>
         {[1, 2, 3, 4, 5].map((item) => (
            <ChatItem key={item} />
         ))}
      </StyledChatList>
   );
};

export default ChatList;
