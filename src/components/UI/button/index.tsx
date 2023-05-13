import { createTheme, ThemeProvider, Button as MuiButton, ButtonProps } from '@mui/material';
import { FC } from 'react';

interface IButtonProps extends ButtonProps {
   [key: string]: unknown;
}

const Button: FC<IButtonProps> = (props) => {
   const theme = createTheme({});

   return (
      <ThemeProvider theme={theme}>
         <MuiButton {...props} />
      </ThemeProvider>
   );
};

export default Button;
