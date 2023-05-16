import { FC } from 'react';
import { Box, styled } from '@mui/material';

import MainLogin from '../../components/login';

interface ILoginProps {
   [key: string]: unknown;
}

const StyledLogin = styled(Box)(({ theme }) => ({
   background: theme.palette.mode === 'dark' ? '#000' : '#fff'
}));

const Login: FC<ILoginProps> = () => {
   return (
      <StyledLogin>
         <MainLogin />
      </StyledLogin>
   );
};

export default Login;
