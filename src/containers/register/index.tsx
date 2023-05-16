import { FC } from 'react';
import { Box, styled } from '@mui/material';

import MainRegister from '../../components/register';

interface IRegisterProps {
   [key: string]: unknown;
}

const StyledRegister = styled(Box)(({ theme }) => ({
   background: theme.palette.mode === 'dark' ? '#000' : '#fff'
}));

const Register: FC<IRegisterProps> = () => {
   return (
      <StyledRegister>
         <MainRegister />
      </StyledRegister>
   );
};

export default Register;
