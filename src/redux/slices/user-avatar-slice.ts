import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { apiTokenInstance, host, idInstance } from '../../utils/constants/axios-instance';

export interface IGetUserAvatarSliceThunkParams {
   chatId: string;
}

export interface Pokedex {
   urlAvatar: string;
   existsWhatsapp: boolean;
}

export interface InitialStateType {
   data: Pokedex;
   isLoading: boolean;
}

if (!idInstance || !apiTokenInstance || !host) {
   throw new Error('Environment variables not set');
}

const initialState: InitialStateType = {
   data: {
      urlAvatar: '',
      existsWhatsapp: false
   },
   isLoading: false
};

export const getUserAvatarImageThunk = createAsyncThunk(
   'userAvatar/getUserAvatarImageThunk',
   async (data: IGetUserAvatarSliceThunkParams) => {
      try {
         const response = await axios.post(`${host}/waInstance${idInstance}/getAvatar/${apiTokenInstance}`, data);

         const result: Pokedex = response.data;

         return result;
      } catch (error) {
         if (error instanceof AxiosError) {
            throw new Error(error.message);
         }
      }
   }
);

const userAvatarSlice = createSlice({
   name: 'userAvatar',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getUserAvatarImageThunk.fulfilled, (state, action) => {
            if (action.payload) {
               state.data = action.payload;
               state.isLoading = false;
            }
         })
         .addCase(getUserAvatarImageThunk.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getUserAvatarImageThunk.rejected, (state) => {
            state.isLoading = false;
         });
   }
});

export const actionUserAvatar = userAvatarSlice.actions;

export default userAvatarSlice;
