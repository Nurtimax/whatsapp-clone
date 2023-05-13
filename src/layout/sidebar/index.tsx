import { FC } from 'react';
import { Box, styled } from '@mui/material';

import { MainSidebar } from '../../components';

interface ISidebarProps {
   [key: string]: unknown;
}

const StyledSidebar = styled(Box)(() => ({}));

const Sidebar: FC<ISidebarProps> = () => {
   return (
      <StyledSidebar>
         <MainSidebar />
      </StyledSidebar>
   );
};

export default Sidebar;
