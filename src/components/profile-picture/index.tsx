import { FC } from 'react';
import { Box, styled } from '@mui/material';

import { profilePicture } from '../../assets';

interface IProfilePictureProps {
   [key: string]: unknown;
}

const StyledProfilePicture = styled(Box)(() => ({
   width: '3.5vw',
   height: '6.25vh',
   justifySelf: 'flex-end',
   '& img': {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      objectFit: 'cover'
   }
}));

const ProfilePicture: FC<IProfilePictureProps> = () => {
   return (
      <StyledProfilePicture>
         <img src={profilePicture} alt="your profile picture" />
      </StyledProfilePicture>
   );
};

export default ProfilePicture;
