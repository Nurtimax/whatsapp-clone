import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, styled } from '@mui/material';

// import MainContent from '../../components/main';

interface IMainProps {
   [key: string]: unknown;
}

const StyledMain = styled(Box)(({ theme }) => ({
   background: theme.palette.secondary.contrastText,
   width: '100%'
}));

const Main: FC<IMainProps> = () => {
   return (
      <StyledMain>
         {/* <MainContent /> */}
         <Outlet />
      </StyledMain>
   );
};

export default Main;
