import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import { host } from '../../utils/constants/axios-instance';
import { WHATSAPP_NURTIMAX05 } from '../../utils/constants/local-storage';

import { IAuthSliceThunkParams } from './auth-slice';

export interface Pokedex {
   archive: boolean;
   id: string;
   notSpam: boolean;
   ephemeralExpiration: number;
   ephemeralSettingTimestamp: number;
   name?: string;
}

interface InitialState {
   data: Pokedex[];
   isLoading: boolean;
}
const initialState: InitialState = {
   data: [],
   isLoading: false
};

const auth: IAuthSliceThunkParams = JSON.parse(localStorage.getItem(WHATSAPP_NURTIMAX05) as string);

export const chatSliceThunk = createAsyncThunk('chatSliceThunk', async () => {
   try {
      const response = await axios.get(`${host}/waInstance${auth.idInstance}/getChats/${auth.apiTokenInstance}`);

      const data: Pokedex[] = response.data;
      return data;
   } catch (error) {
      toast.error('error chat');
   }
});

const chatSlice = createSlice({
   name: 'chatSlice',
   initialState,
   reducers: {
      changeUser: () => {}
   },
   extraReducers: (builder) => {
      builder
         .addCase(chatSliceThunk.fulfilled, (state, action) => {
            state.data = action.payload || [];
            state.isLoading = false;
         })
         .addCase(chatSliceThunk.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(chatSliceThunk.rejected, (state) => {
            state.isLoading = false;
         });
   }
});

export const ActionChatSlice = chatSlice.actions;
export default chatSlice;
