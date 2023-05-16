import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import { apiTokenInstance, host, idInstance } from '../../utils/constants/axios-instance';

const initialState = {};

interface ISendMessage {
   message: string;
   chatId: string;
}

if (!idInstance || !apiTokenInstance) {
   throw new Error('Environment variables not set');
}

export const sendMessageThunk = createAsyncThunk('sendMessage/sendMessageThunk', async (message: ISendMessage) => {
   try {
      await axios.post(`${host}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, message);
   } catch (error) {
      toast.error('sendMessage Error');
   }
});

const sendMessageSlice = createSlice({
   name: 'sendMessage',
   initialState,
   reducers: {}
});

export const ActionSendMessageSlice = sendMessageSlice.actions;

export default sendMessageSlice;
