import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../redux/hook';

interface IProtectedRouteProps {
   [key: string]: unknown;
   children: ReactNode;
   fallbackPath: string;
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({ children, fallbackPath }) => {
   const { data } = useAppSelector((state) => state.auth);

   if (data.stateInstance === 'notAuthorized') {
      return <Navigate to={fallbackPath} />;
   }

   return <>{children}</>;
};

export default ProtectedRoute;
