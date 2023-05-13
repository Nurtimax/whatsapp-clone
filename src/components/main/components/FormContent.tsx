import { FC } from 'react';
import { Box, styled } from '@mui/material';

interface IFormContentProps {
   [key: string]: unknown;
}

const StyledFormContent = styled(Box)(({ theme }) => ({
   background: theme.palette.secondary.dark + 80,
   height: '8vh'
}));

const FormContent: FC<IFormContentProps> = () => {
   return <StyledFormContent>FormContent</StyledFormContent>;
};

export default FormContent;
