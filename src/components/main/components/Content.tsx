import { FC } from 'react';
import { Box, styled } from '@mui/material';

interface IContentProps {
   [key: string]: unknown;
}

const StyledContent = styled(Box)(() => ({}));

const Content: FC<IContentProps> = () => {
   return <StyledContent></StyledContent>;
};

export default Content;
