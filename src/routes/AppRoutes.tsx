import { FC, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '../layout';
import Chat from '../containers/chat';
import ChatDetail from '../containers/chat-detail';
import Login from '../containers/login';
import Register from '../containers/register';
import { useAppDispatch } from '../redux/hook';
import { WHATSAPP_NURTIMAX05 } from '../utils/constants/local-storage';
import { authSliceThunk, IAuthSliceThunkParams } from '../redux/slices/auth-slice';
import { chatSliceThunk } from '../redux/slices/chat-slice';
import { getChatSliceThunk } from '../redux/slices/contacts-slice';

import ProtectedRoute from './ProtectedRoute';

interface IAppRoutesProps {
   [key: string]: unknown;
}

const router = createBrowserRouter([
   {
      path: '/',
      element: (
         <ProtectedRoute fallbackPath="/login">
            <Layout />
         </ProtectedRoute>
      ),
      children: [
         {
            path: '/chat',
            element: <Chat />
         },
         {
            path: '/chat/:chatId',
            element: <ChatDetail />
         }
      ]
   },
   {
      path: 'login',
      element: <Login />
   },
   {
      path: 'register',
      element: <Register />
   }
]);

const auth: IAuthSliceThunkParams = JSON.parse(localStorage.getItem(WHATSAPP_NURTIMAX05) as string);

const AppRoutes: FC<IAppRoutesProps> = () => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      if (auth) {
         dispatch(authSliceThunk(auth));
      }
   }, [dispatch]);

   useEffect(() => {
      dispatch(chatSliceThunk());
      dispatch(getChatSliceThunk());
   }, [dispatch]);

   return <RouterProvider router={router} />;
};

export default AppRoutes;
