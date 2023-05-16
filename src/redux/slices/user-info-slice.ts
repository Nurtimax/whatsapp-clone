import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { apiTokenInstance, host, idInstance } from '../../utils/constants/axios-instance';

export interface Pokedex {
   avatar: string;
   name: string;
   email: string;
   category: string;
   description: string;
   products: string[];
   chatId: string;
   lastSeen: null;
   isArchive: boolean;
   isDisappearing: boolean;
   isMute: boolean;
   messageExpiration: number;
   muteExpiration: null;
}

interface InitialState {
   data?: Pokedex;
}

const initialState: InitialState = {
   data: undefined
};

export interface IGetUserInfoSliceThunkParams {
   chatId: string;
}

if (!idInstance || !apiTokenInstance || !host) {
   throw new Error('Environment variables not set');
}

export const getUserInfoSliceThunk = createAsyncThunk(
   'userInfoSlice/getUserInfoSliceThunk',
   async (data: IGetUserInfoSliceThunkParams) => {
      try {
         const response = await axios.post(`${host}/waInstance${idInstance}/GetContactInfo/${apiTokenInstance}`, data);

         const result: Pokedex = response.data;

         return result;
      } catch (error) {
         if (error instanceof AxiosError) {
            throw new Error('');
         }
      }
   }
);

const userInfoSlice = createSlice({
   name: 'userInfoSlice',
   initialState,
   reducers: {
      changeUser: () => {}
   },
   extraReducers: (builder) => {
      builder
         .addCase(getUserInfoSliceThunk.fulfilled, (state, action) => {
            state.data = action.payload;
         })
         .addCase(getUserInfoSliceThunk.pending, () => {})
         .addCase(getUserInfoSliceThunk.rejected, () => {});
   }
});

export const ActionUserInfoSlice = userInfoSlice.actions;
export default userInfoSlice;
