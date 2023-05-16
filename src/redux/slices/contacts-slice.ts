import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import { apiTokenInstance, host, idInstance } from '../../utils/constants/axios-instance';

export interface Pokedex {
   id: string;
   name: string;
   type: Type;
}

export enum Type {
   Group = 'group',
   User = 'user'
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

export const getChatSliceThunk = createAsyncThunk('chatSliceThunk', async () => {
   try {
      const response = await axios.get(`${host}/waInstance${idInstance}/getContacts/${apiTokenInstance}`);

      const data: Pokedex[] = response.data;
      return data;
   } catch (error) {
      toast.error('error chat');
   }
});

const contactsSlice = createSlice({
   name: 'contactsSlice',
   initialState,
   reducers: {
      changeUser: () => {}
   },
   extraReducers: (builder) => {
      builder
         .addCase(getChatSliceThunk.fulfilled, (state, action) => {
            state.data = action.payload || [];
         })
         .addCase(getChatSliceThunk.pending, () => {})
         .addCase(getChatSliceThunk.rejected, () => {});
   }
});

export const ActionChatSlice = contactsSlice.actions;
export default contactsSlice;
