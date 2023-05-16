import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { CssBaseline } from '@mui/material';
import { Toaster } from 'react-hot-toast';

// UI
import { ThemeProvider } from '../UI';
// redux store
import store, { persistor } from '../../redux';

interface IProvidersProps {
   children: ReactNode;
}

const Providers: FC<IProvidersProps> = ({ children }) => {
   return (
      <>
         <CssBaseline />
         <Toaster position="top-right" reverseOrder={false} />
         <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
               <ThemeProvider>{children}</ThemeProvider>
            </PersistGate>
         </Provider>
      </>
   );
};

export default Providers;
