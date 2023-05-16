import { FC } from 'react';
import { Box, IconButton, styled } from '@mui/material';
import { BsCloudMoonFill, BsCloudSunFill } from 'react-icons/bs';
import { GiExitDoor } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import ProfilePicture from '../../profile-picture';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { ActionTheme } from '../../../redux/slices/theme-slices';
import { logOutSliceThunk } from '../../../redux/slices/log-out';

interface IHeadProps {
   [key: string]: unknown;
}

const StyledHead = styled(Box)(({ theme }) => ({
   padding: '.5rem',
   display: 'grid',
   background: theme.palette.secondary.contrastText,
   gridTemplateColumns: 'repeat(5, 1fr)',
   placeItems: 'center'
}));

const Head: FC<IHeadProps> = () => {
   const { data } = useAppSelector((state) => state.theme);

   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   const style = {
      gridColumn: '4/5',
      fontSize: '2rem'
   };

   const changeThemeHandler = () => {
      dispatch(ActionTheme.changeTheme());
   };

   const logOutHandler = async () => {
      const response = await dispatch(logOutSliceThunk()).unwrap();

      if (response?.isLogout) {
         toast.success('Successfully log out');
         navigate('/login');
      } else [toast.error('Something is wrong')];
   };

   return (
      <StyledHead>
         <ProfilePicture sx={{ gridColumn: '3/4' }} />
         <IconButton onClick={changeThemeHandler}>
            {data.mode === 'dark' ? <BsCloudMoonFill style={style} /> : <BsCloudSunFill style={style} />}
         </IconButton>
         <IconButton onClick={logOutHandler} style={{ ...style, gridColumn: '5/6' }}>
            <GiExitDoor />
         </IconButton>
      </StyledHead>
   );
};

export default Head;
