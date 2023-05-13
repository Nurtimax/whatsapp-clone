import { FC } from 'react';
import { Box, styled, Typography } from '@mui/material';

import ProfilePicture from '../../profile-picture';

interface IHeadProps {
   [key: string]: unknown;
}

const StyledHead = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '1rem',
   padding: '.5rem',
   borderBottom: '1px solid'
}));

const Head: FC<IHeadProps> = () => {
   return (
      <StyledHead>
         <ProfilePicture />
         <Typography variant="h6">+996 706 959 538</Typography>
      </StyledHead>
   );
};

export default Head;
