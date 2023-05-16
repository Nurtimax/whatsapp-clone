import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '../layout';
import Chat from '../containers/chat';
import ChatDetail from '../containers/chat-detail';
import Login from '../containers/login';
import Register from '../containers/register';

interface IAppRoutesProps {
   [key: string]: unknown;
}

const router = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
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

const AppRoutes: FC<IAppRoutesProps> = () => {
   return <RouterProvider router={router} />;
};

export default AppRoutes;
