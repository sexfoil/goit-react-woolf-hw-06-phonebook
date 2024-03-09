import { contactsReducer } from './slice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'phonebook_contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const reducer = {
  phonebook: persistedReducer,
};
