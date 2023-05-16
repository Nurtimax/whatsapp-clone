import { FC } from 'react';
import { Box, BoxProps, styled } from '@mui/material';

import { profilePicture } from '../../assets';

interface IProfilePictureProps extends BoxProps {
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

const ProfilePicture: FC<IProfilePictureProps> = ({ picture, ...props }) => {
   return (
      <StyledProfilePicture {...props}>
         <img src={picture ? picture : profilePicture} alt="your profile picture" />
      </StyledProfilePicture>
   );
};

export default ProfilePicture;
