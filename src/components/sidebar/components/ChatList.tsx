import { FC } from 'react';
import { Box, styled } from '@mui/material';

import { useAppSelector } from '../../../redux/hook';

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
   const { data, isLoading } = useAppSelector((state) => state.chat);

   if (isLoading) {
      return <h1>Loading...</h1>;
   }

   return (
      <StyledChatList>
         {data.map((item) => (
            <ChatItem key={item.id} {...item} />
         ))}
      </StyledChatList>
   );
};

export default ChatList;
