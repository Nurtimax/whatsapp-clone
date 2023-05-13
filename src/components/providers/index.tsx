import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from '@/redux';

interface IProvidersProps {
   children: ReactNode;
}

const Providers: FC<IProvidersProps> = ({ children }) => {
   return (
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            {children}
         </PersistGate>
      </Provider>
   );
};

export default Providers;
