import { FC, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';

import { useAppSelector } from '../../../redux/hook';

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

   const { data } = useAppSelector((state) => state.theme);

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
         },
         mode: data.mode,
         text: {
            primary: data.mode === 'dark' ? '#777777' : '#000',
            secondary: data.mode === 'dark' ? '#777777' : '#000',
            disabled: data.mode === 'dark' ? '#777777b7' : '#000000b6'
         }
      }
   });

   return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
