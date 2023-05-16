import { FC } from 'react';
import { Box, styled } from '@mui/material';

import { profilePicture } from '../../assets';

interface IProfilePictureProps {
   [key: string]: unknown;
   picture?: string;
}

const StyledProfilePicture = styled(Box)(() => ({
   width: '50px',
   height: '50px',
   justifySelf: 'flex-end',
   '& img': {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      objectFit: 'cover'
   }
}));

const ProfilePicture: FC<IProfilePictureProps> = ({ picture }) => {
   return (
      <StyledProfilePicture>
         <img src={picture ? picture : profilePicture} alt="your profile picture" />
      </StyledProfilePicture>
   );
};

export default ProfilePicture;
