import { FC } from 'react';
import { Box, styled } from '@mui/material';

interface IMesssageProps {
   [key: string]: unknown;
}

const StyledMesssage = styled(Box)(() => ({
   height: '84vh',
   width: '100%',
   background: '#1b1a1a'
}));

const Messsage: FC<IMesssageProps> = () => {
   return <StyledMesssage>Messsage</StyledMesssage>;
};

export default Messsage;
