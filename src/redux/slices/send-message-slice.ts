import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import { host } from '../../utils/constants/axios-instance';
import { WHATSAPP_NURTIMAX05 } from '../../utils/constants/local-storage';

import { IAuthSliceThunkParams } from './auth-slice';
import { getChatDetailSliceThunk } from './chat-details-slice';

const initialState = {};

interface ISendMessage {
   message: string;
   chatId: string;
}

const auth: IAuthSliceThunkParams = JSON.parse(localStorage.getItem(WHATSAPP_NURTIMAX05) as string);

export const sendMessageThunk = createAsyncThunk(
   'sendMessage/sendMessageThunk',
   async (message: ISendMessage, { dispatch }) => {
      try {
         await axios.post(`${host}/waInstance${auth.idInstance}/sendMessage/${auth.apiTokenInstance}`, message);
         dispatch(getChatDetailSliceThunk({ chatId: message.chatId }));
      } catch (error) {
         toast.error('sendMessage Error');
      }
   }
);

const sendMessageSlice = createSlice({
   name: 'sendMessage',
   initialState,
   reducers: {}
});

export const ActionSendMessageSlice = sendMessageSlice.actions;

export default sendMessageSlice;
