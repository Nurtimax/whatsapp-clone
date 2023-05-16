import { combineReducers } from '@reduxjs/toolkit';

import authSlice from './slices/auth-slice';
import chatDetailsSlice from './slices/chat-details-slice';
import chatSlice from './slices/chat-slice';
import contactsSlice from './slices/contacts-slice';
import themeSlice from './slices/theme-slices';
import userAvatarSlice from './slices/user-avatar-slice';
import userInfoSlice from './slices/user-info-slice';

const rootReducer = combineReducers({
   theme: themeSlice.reducer,
   chat: chatSlice.reducer,
   auth: authSlice.reducer,
   contact: contactsSlice.reducer,
   userInfo: userInfoSlice.reducer,
   avatar: userAvatarSlice.reducer,
   chatDetail: chatDetailsSlice.reducer
});

export default rootReducer;
