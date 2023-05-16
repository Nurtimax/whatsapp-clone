import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   data: {
      user: {}
   }
};

const authSlice = createSlice({
   name: 'authSlice',
   initialState,
   reducers: {
      getUser: (state, action) => {
         state.data.user = action.payload;
      }
   }
});

export const ActionAuthSlice = authSlice.actions;

export default authSlice;
