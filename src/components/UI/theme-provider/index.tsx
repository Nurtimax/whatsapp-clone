import { FC, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';

interface IThemeProviderProps {
   children: ReactNode;
}

const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
   /* 
   * Default breakpoints
   Each breakpoint (a key) matches with a fixed screen width (a value):
   
   * xs, extra-small: 0px
   * sm, small: 600px
   * md, medium: 900px
   * lg, large: 1200px
   * xl, extra-lerge: 1536px 
  */

   const theme = createTheme({
      palette: {
         primary: {
            main: '#25D366',
            light: '#DCF8C6',
            dark: '#075E54'
         },
         secondary: {
            main: '#cdcdcd',
            dark: '#777777'
         },
         error: {
            main: '#FF3B30'
         },
         warning: {
            main: '#FFD60A'
         },
         success: {
            main: '#25D366',
            light: '#34B7F1'
         }
      }
   });

   return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;