import { FC } from 'react';
import { Box, styled } from '@mui/material';

import FormContent from './FormContent';
import Messsage from './Messsage';

interface IContentProps {
   [key: string]: unknown;
}

const StyledContent = styled(Box)(() => ({}));

const Content: FC<IContentProps> = () => {
   return (
      <StyledContent>
         <Messsage />
         <FormContent />
      </StyledContent>
   );
};

export default Content;
