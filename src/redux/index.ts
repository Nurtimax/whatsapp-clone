import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import rootReducer from './rootReducer';

const persistConfig = {
   key: 'root',
   version: 1,
   storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
         }
      })
});

export const persistor = persistStore(store);

export default store;
