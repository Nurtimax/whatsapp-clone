import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';

import { apiTokenInstance, host, idInstance } from '../../utils/constants/axios-instance';

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

if (!idInstance || !apiTokenInstance || !host) {
   throw new Error('Environment variables not set');
}

export interface InitialStateType {
   data: Pokedex[];
}

const initialState: InitialStateType = {
   data: []
};

export const getChatDetailSliceThunk = createAsyncThunk(
   'chatDetails/getChatDetailSliceThunk',
   async (data: IGetChatDetailSliceThunkParams) => {
      try {
         const response = await axios.post(`${host}/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`, {
            chatId: data.chatId,
            count: 100
         });

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
