import { Box, styled } from '@mui/material';
import { FC } from 'react';

import Main from './main';
import Sidebar from './sidebar';

interface ILayoutProps {
   [key: string]: unknown;
}

const StyledLayout = styled(Box)(({ theme }) => ({
   background: theme.palette.mode === 'dark' ? '#000' : '#cecccc',
   color: theme.palette.mode !== 'dark' ? '#000' : '#cecccc',
   display: 'flex'
}));

const Layout: FC<ILayoutProps> = () => {
   return (
      <StyledLayout>
         <Sidebar />
         <Main />
      </StyledLayout>
   );
};

export default Layout;
