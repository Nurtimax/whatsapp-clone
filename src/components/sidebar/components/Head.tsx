import { FC } from 'react';
import { Box, styled } from '@mui/material';

import ProfilePicture from '../../profile-picture';

interface IHeadProps {
   [key: string]: unknown;
}

const StyledHead = styled(Box)(({ theme }) => ({
   padding: '.5rem',
   display: 'grid',
   background: theme.palette.secondary.dark + 80
}));

const Head: FC<IHeadProps> = () => {
   return (
      <StyledHead>
         <ProfilePicture />
      </StyledHead>
   );
};

export default Head;
