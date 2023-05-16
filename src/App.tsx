import React, { useEffect } from 'react';

import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hook';
import { chatSliceThunk } from './redux/slices/chat-slice';
import { getChatSliceThunk } from './redux/slices/contacts-slice';
import { AppRoutes } from './routes';

function App() {
   const { data } = useAppSelector((state) => state.auth);
   console.log(data);

   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(chatSliceThunk());
      dispatch(getChatSliceThunk());
   }, []);

   return <AppRoutes />;
}

export default App;
