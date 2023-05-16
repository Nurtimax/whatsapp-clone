import { FC, useMemo } from 'react';
import { Box, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import ProfilePicture from '../../profile-picture';
import { useAppSelector } from '../../../redux/hook';
import { Pokedex } from '../../../redux/slices/chat-slice';

interface IChatItemProps extends Pokedex {
   [key: string]: unknown;
}

const StyledChatItem = styled(Box)(({ theme }) => ({
   padding: '.5rem',
   background: theme.palette.secondary.contrastText,
   display: 'flex',
   alignItems: 'center',
   gap: '1rem',
   height: '8vh',
   border: `1px solid ${theme.palette.mode === 'dark' ? 'black' : 'white'}`,
   borderRadius: '3px',
   cursor: 'pointer'
}));

const ChatItem: FC<IChatItemProps> = ({ id }) => {
   const {
      contact: { data }
   } = useAppSelector((state) => state);

   const findedData = useMemo(() => {
      return data.find((item) => item.id === id);
   }, [data, id]);

   return (
      <StyledChatItem>
         <ProfilePicture />
         <Link to={`chat/${id}`}>
            <Typography>{findedData?.name}</Typography>
         </Link>
      </StyledChatItem>
   );
};

export default ChatItem;
