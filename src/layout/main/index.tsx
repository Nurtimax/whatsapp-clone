import { FC } from 'react';
import { Box, styled } from '@mui/material';

import MainContent from '../../components/main';

interface IMainProps {
   [key: string]: unknown;
}

const StyledMain = styled(Box)(({ theme }) => ({
   background: theme.palette.secondary.dark + 80,
   width: '100%'
}));

const Main: FC<IMainProps> = () => {
   return (
      <StyledMain>
         <MainContent />
      </StyledMain>
   );
};

export default Main;
