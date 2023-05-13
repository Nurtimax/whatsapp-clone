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
   reducers: {}
});

export const ActionTheme = themeSlice.actions;

export default themeSlice;
