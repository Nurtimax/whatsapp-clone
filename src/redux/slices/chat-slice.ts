import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import { apiTokenInstance, host, idInstance } from '../../utils/constants/axios-instance';

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
}
const initialState: InitialState = {
   data: []
};

if (!idInstance || !apiTokenInstance) {
   throw new Error('Environment variables not set');
}

export const chatSliceThunk = createAsyncThunk('chatSliceThunk', async () => {
   try {
      const response = await axios.get(`${host}/waInstance${idInstance}/getChats/${apiTokenInstance}`);

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
         })
         .addCase(chatSliceThunk.pending, () => {})
         .addCase(chatSliceThunk.rejected, () => {});
   }
});

export const ActionChatSlice = chatSlice.actions;
export default chatSlice;
