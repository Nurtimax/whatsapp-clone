import { FC } from 'react';
import { Box, styled } from '@mui/material';

import MainContent from '../../components/main';

interface IChatDetailProps {
   [key: string]: unknown;
}

const StyledChatDetail = styled(Box)(() => ({}));

const ChatDetail: FC<IChatDetailProps> = () => {
   return (
      <StyledChatDetail>
         <MainContent />
      </StyledChatDetail>
   );
};

export default ChatDetail;
