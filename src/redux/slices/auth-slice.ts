import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';

import { host } from '../../utils/constants/axios-instance';
import { WHATSAPP_NURTIMAX05 } from '../../utils/constants/local-storage';

export interface IAuthSliceThunkParams {
   idInstance: string;
   apiTokenInstance: string;
}

export interface IAuthPokedox {
   stateInstance: 'notAuthorized' | 'authorized';
}

interface InitialStateType {
   data: IAuthPokedox;
}

const initialState: InitialStateType = {
   data: {
      stateInstance: 'notAuthorized'
   }
};

export const authSliceThunk = createAsyncThunk('authSlice/authSliceThunk', async (data: IAuthSliceThunkParams) => {
   try {
      const response = await axios.get(
         `${host}/waInstance${data.idInstance}/getStateInstance/${data.apiTokenInstance}`
      );

      const result: IAuthPokedox = response.data;

      localStorage.setItem(WHATSAPP_NURTIMAX05, JSON.stringify(data));

      if (result.stateInstance === 'authorized') {
         toast.success('You are authorized');
      } else {
         toast.error('You are notAuthorized');
      }

      return result;
   } catch (error) {
      if (error instanceof AxiosError) {
         toast.error(error.message);
         throw new Error(error.message);
      }
      toast.error('Something is wrong');
   }
});

const authSlice = createSlice({
   name: 'authSlice',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(authSliceThunk.fulfilled, (state, action) => {
            if (action.payload) {
               state.data = action.payload;
            }
         })
         .addCase(authSliceThunk.pending, () => {})
         .addCase(authSliceThunk.rejected, (state) => {
            return {
               ...state,
               data: {
                  ...state.data,
                  stateInstance: 'notAuthorized'
               }
            };
         });
   }
});

export const ActionAuthSlice = authSlice.actions;

export default authSlice;
