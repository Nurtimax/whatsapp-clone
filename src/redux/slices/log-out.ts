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
   isLogout: boolean;
}

interface InitialStateType {
   data: IAuthPokedox;
}

const initialState: InitialStateType = {
   data: {
      isLogout: false
   }
};

const auth: IAuthSliceThunkParams = JSON.parse(localStorage.getItem(WHATSAPP_NURTIMAX05) as string);

export const logOutSliceThunk = createAsyncThunk('logOutSlice/logOutSliceThunk', async () => {
   try {
      const response = await axios.get(`${host}/waInstance${auth.idInstance}/logout/${auth.apiTokenInstance}`);

      const result: IAuthPokedox = response.data;

      if (!result.isLogout) {
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

const logOutSlice = createSlice({
   name: 'logOutSlice',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(logOutSliceThunk.fulfilled, (state, action) => {
            if (action.payload) {
               state.data = action.payload;
            }
         })
         .addCase(logOutSliceThunk.pending, () => {})
         .addCase(logOutSliceThunk.rejected, (state) => {
            return {
               ...state,
               data: {
                  ...state.data,
                  isLogout: false
               }
            };
         });
   }
});

export const ActionLogOutSlice = logOutSlice.actions;

export default logOutSlice;
