import { Box, BoxProps, styled, useTheme } from '@mui/material';
import { FC } from 'react';

import Main from './main';
import Sidebar from './sidebar';

interface ILayoutProps {
   [key: string]: unknown;
}

interface IStyledLayoutExtendsProps extends BoxProps {
   [key: string]: unknown;
   mode: string;
}

const StyledLayout = styled(Box)<IStyledLayoutExtendsProps>(({ mode }) => ({
   background: mode === 'dark' ? '#000' : '#f6f6f6',
   display: 'flex'
}));

const Layout: FC<ILayoutProps> = () => {
   const { palette } = useTheme();

   return (
      <StyledLayout mode={palette.mode}>
         <Sidebar />
         <Main />
      </StyledLayout>
   );
};

export default Layout;
