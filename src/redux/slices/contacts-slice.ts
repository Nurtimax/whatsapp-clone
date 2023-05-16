import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import { host } from '../../utils/constants/axios-instance';
import { WHATSAPP_NURTIMAX05 } from '../../utils/constants/local-storage';

import { IAuthSliceThunkParams } from './auth-slice';

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
   isLoading: boolean;
}

const initialState: InitialState = {
   data: [],
   isLoading: false
};

const auth: IAuthSliceThunkParams = JSON.parse(localStorage.getItem(WHATSAPP_NURTIMAX05) as string);

export const getChatSliceThunk = createAsyncThunk('chatSliceThunk', async () => {
   try {
      const response = await axios.get(`${host}/waInstance${auth.idInstance}/getContacts/${auth.apiTokenInstance}`);

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
            state.isLoading = false;
         })
         .addCase(getChatSliceThunk.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getChatSliceThunk.rejected, (state) => {
            state.isLoading = false;
         });
   }
});

export const ActionChatSlice = contactsSlice.actions;
export default contactsSlice;
