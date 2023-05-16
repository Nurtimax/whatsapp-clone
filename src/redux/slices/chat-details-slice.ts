import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';

import { host } from '../../utils/constants/axios-instance';
import { WHATSAPP_NURTIMAX05 } from '../../utils/constants/local-storage';

import { IAuthSliceThunkParams } from './auth-slice';

export interface IGetChatDetailSliceThunkParams {
   chatId: string;
}

export interface Pokedex {
   type: string;
   idMessage: string;
   timestamp: number;
   typeMessage: string;
   chatId: string;
   textMessage: string;
   statusMessage: string;
   sendByApi: boolean;
}

export interface InitialStateType {
   data: Pokedex[];
}

const initialState: InitialStateType = {
   data: []
};

const auth: IAuthSliceThunkParams = JSON.parse(localStorage.getItem(WHATSAPP_NURTIMAX05) as string);

export const getChatDetailSliceThunk = createAsyncThunk(
   'chatDetails/getChatDetailSliceThunk',
   async (data: IGetChatDetailSliceThunkParams) => {
      try {
         const response = await axios.post(
            `${host}/waInstance${auth.idInstance}/getChatHistory/${auth.apiTokenInstance}`,
            {
               chatId: data.chatId,
               count: 100
            }
         );

         const result: Pokedex[] = response.data;

         return result;
      } catch (error) {
         if (error instanceof AxiosError) {
            toast.error(error.message);
            throw new Error(error.message);
         }
         toast('Something is wrong');
      }
   }
);

const chatDetailsSlice = createSlice({
   name: 'chatDetails',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getChatDetailSliceThunk.fulfilled, (state, action) => {
            if (Array.isArray(action.payload)) {
               return {
                  ...state,
                  data: action.payload
               };
            }
            return {
               ...state,
               data: []
            };
         })
         .addCase(getChatDetailSliceThunk.pending, () => {})
         .addCase(getChatDetailSliceThunk.rejected, (state) => {
            return {
               ...state,
               data: []
            };
         });
   }
});

export const actionChatDetailsSlice = chatDetailsSlice.actions;

export default chatDetailsSlice;
