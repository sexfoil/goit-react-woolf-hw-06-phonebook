import { createReducer } from '@reduxjs/toolkit';
import { contactsReducer } from './coontact/contactsReducer';

export const rootReducer = createReducer({
  contacts: contactsReducer,
});
