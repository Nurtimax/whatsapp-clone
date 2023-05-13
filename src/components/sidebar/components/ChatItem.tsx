import { FC } from 'react';
import { Box, styled, Typography } from '@mui/material';

import ProfilePicture from '../../profile-picture';

interface IChatItemProps {
   [key: string]: unknown;
}

const StyledChatItem = styled(Box)(({ theme }) => ({
   padding: '.5rem',
   background: theme.palette.secondary.dark + 80,
   display: 'flex',
   alignItems: 'center',
   gap: '1rem',
   height: '8vh',
   border: '1px solid',
   borderRadius: '3px',
   cursor: 'pointer'
}));

const ChatItem: FC<IChatItemProps> = () => {
   return (
      <StyledChatItem>
         <ProfilePicture />
         <Typography>Nurtilek</Typography>
      </StyledChatItem>
   );
};

export default ChatItem;
