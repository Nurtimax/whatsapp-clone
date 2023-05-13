import { FC } from 'react';
import { Box, styled } from '@mui/material';

import Head from './components/Head';
import Chats from './components/Chats';

interface IMainSidebarProps {
   [key: string]: unknown;
}

const StyledMainSidebar = styled(Box)(() => ({
   width: '25vw',
   borderRight: '1px solid black',
   borderBottom: '1px solid black'
}));

const MainSidebar: FC<IMainSidebarProps> = () => {
   return (
      <StyledMainSidebar>
         <Head />
         <Chats />
      </StyledMainSidebar>
   );
};

export default MainSidebar;
