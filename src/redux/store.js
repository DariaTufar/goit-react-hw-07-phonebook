import { configureStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


import storage from 'redux-persist/lib/storage';
// const enhancer = devToolsEnhancer();
const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedContactReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactReducer,
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
