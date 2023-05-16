import { FC, useEffect } from 'react';
import { Box, styled } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { getChatDetailSliceThunk } from '../../../redux/slices/chat-details-slice';

interface IMesssageProps {
   [key: string]: unknown;
}

const StyledMesssage = styled(Box)(() => ({
   height: '84vh',
   width: '100%',
   background: '#1b1a1a',
   overflow: 'auto'
}));

const Messsage: FC<IMesssageProps> = () => {
   const { data } = useAppSelector((state) => state.chatDetail);

   const { chatId } = useParams();

   const dispatch = useAppDispatch();

   useEffect(() => {
      if (chatId) {
         dispatch(getChatDetailSliceThunk({ chatId }));
      }
   }, [chatId, dispatch]);

   return (
      <StyledMesssage>
         <ul>
            {data?.map((item) => (
               <li key={item.idMessage}>{item.textMessage}</li>
            ))}
         </ul>{' '}
      </StyledMesssage>
   );
};

export default Messsage;
