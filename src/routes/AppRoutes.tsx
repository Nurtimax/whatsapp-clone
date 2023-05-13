import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '../layout';
import Chat from '../containers/chat';
import ChatDetail from '../containers/chat-detail';

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
   }
]);

const AppRoutes: FC<IAppRoutesProps> = () => {
   return <RouterProvider router={router} />;
};

export default AppRoutes;
