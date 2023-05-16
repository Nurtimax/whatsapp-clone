import { createSlice } from '@reduxjs/toolkit';

import { IThemeInitialState } from '../../types/theme';

const initialState: IThemeInitialState = {
   data: {
      mode: 'dark'
   }
};

const themeSlice = createSlice({
   name: 'themeSlice',
   initialState,
   reducers: {
      changeTheme: (state) => {
         if (state.data.mode === 'dark') {
            state.data.mode = 'light';
         } else {
            state.data.mode = 'dark';
         }
      }
   }
});

export const ActionTheme = themeSlice.actions;

export default themeSlice;
