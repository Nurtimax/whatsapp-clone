import { FC, useEffect } from 'react';
import { Box, styled, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import ProfilePicture from '../../profile-picture';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { getUserInfoSliceThunk } from '../../../redux/slices/user-info-slice';

interface IHeadProps {
   [key: string]: unknown;
}

const idInstance = process.env.GREEN_API_ID_INSTANCE || '1101820922';
const apiTokenInstance =
   process.env.GREEN_API_API_TOKEN_INSTANCE || '	03ff0596089143639a99f2dabf626c0cdd8eb2b04c75451fac';

if (!idInstance || !apiTokenInstance) {
   throw new Error('Environment variables not set');
}

const StyledHead = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '1rem',
   padding: '.5rem',
   borderBottom: '1px solid black'
}));

const Head: FC<IHeadProps> = () => {
   const { chatId } = useParams();

   const { data: userInfoData } = useAppSelector((state) => state.userInfo);

   const dispatch = useAppDispatch();

   useEffect(() => {
      if (chatId) {
         dispatch(getUserInfoSliceThunk({ chatId }));
      }
   }, [chatId, dispatch]);

   return (
      <StyledHead>
         <ProfilePicture picture={userInfoData?.avatar} />
         <Typography variant="h6">{userInfoData?.name}</Typography>
      </StyledHead>
   );
};

export default Head;
