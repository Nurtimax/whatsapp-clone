import { FC } from 'react';
import { Box, styled } from '@mui/material';

import Head from './components/Head';
import Content from './components/Content';

interface IMainContentProps {
   [key: string]: unknown;
}

const StyledMainContent = styled(Box)(() => ({}));

const MainContent: FC<IMainContentProps> = () => {
   return (
      <StyledMainContent>
         <Head />
         <Content />
      </StyledMainContent>
   );
};

export default MainContent;
