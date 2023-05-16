import { FC } from 'react';
import { Box, styled } from '@mui/material';
import QRCode from 'react-qr-code';

import { host } from '../../utils/constants/axios-instance';

import Content from './components/Content';

interface IMainLoginProps {
   [key: string]: unknown;
}

const StyledMainLogin = styled(Box)(() => ({
   width: '100%',
   height: '100vh',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center'
}));

const url =
   '2@PCeeGrcUwdqufpBPPnonvk7rZ2RxHrY1aIuik8y9suSNOaGA3z9jqRMyDJ8pBaN0bYBJ8oM3DceABQ==,Hcn5Q2ByUTvy8kXjSkTHD3TEpJk8IrpRDmnVXWamJGA=,i/UP4W3C+9iGnFmgh6IIgpaqSup48y/D0tV2dk88cXk=,nc/XwHOwRM8NQ11W+URRpcHFPKj2aRV/Fg80Ee42SSE=';

const MainLogin: FC<IMainLoginProps> = () => {
   return (
      <StyledMainLogin>
         <Content />
         <QRCode value={`${host}/${url}`} />
      </StyledMainLogin>
   );
};

export default MainLogin;
