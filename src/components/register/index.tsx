import { FC } from 'react';
import { Box, styled } from '@mui/material';

import Content from './components/Content';

interface IMainRegisterProps {
   [key: string]: unknown;
}

const StyledMainRegister = styled(Box)(() => ({
   width: '100%',
   height: '100vh',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center'
}));

const MainRegister: FC<IMainRegisterProps> = () => {
   return (
      <StyledMainRegister>
         <Content />
      </StyledMainRegister>
   );
};

export default MainRegister;
