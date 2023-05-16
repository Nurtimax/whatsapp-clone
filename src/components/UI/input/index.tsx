import { createTheme, InputBase, InputBaseProps, ThemeProvider } from '@mui/material';
import { FC } from 'react';

interface InputProps extends InputBaseProps {
   [key: string]: unknown;
}

const Input: FC<InputProps> = (props) => {
   const theme = createTheme({
      components: {
         MuiInputBase: {
            styleOverrides: {
               root: {
                  background: '#777777',
                  padding: '.8rem',
                  borderRadius: '9px',
                  fontSize: '1rem',
                  color: '#f5f5f5',
                  '& input::placeholder': {
                     color: 'white',
                     padding: '0 .4rem'
                  }
               }
            }
         }
      }
   });

   return (
      <ThemeProvider theme={theme}>
         <InputBase {...props} />
      </ThemeProvider>
   );
};

export default Input;
