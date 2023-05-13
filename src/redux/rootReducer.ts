import { combineReducers } from '@reduxjs/toolkit';

import themeSlice from './slices/theme-slices';

const rootReducer = combineReducers({
   theme: themeSlice.reducer
});

export default rootReducer;
