import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { host } from '../../utils/constants/axios-instance';
import { WHATSAPP_NURTIMAX05 } from '../../utils/constants/local-storage';

import { IAuthSliceThunkParams } from './auth-slice';

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

const initialState: InitialStateType = {
   data: {
      urlAvatar: '',
      existsWhatsapp: false
   },
   isLoading: false
};

const auth: IAuthSliceThunkParams = JSON.parse(localStorage.getItem(WHATSAPP_NURTIMAX05) as string);

export const getUserAvatarImageThunk = createAsyncThunk(
   'userAvatar/getUserAvatarImageThunk',
   async (data: IGetUserAvatarSliceThunkParams) => {
      try {
         const response = await axios.post(
            `${host}/waInstance${auth.idInstance}/getAvatar/${auth.apiTokenInstance}`,
            data
         );

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
