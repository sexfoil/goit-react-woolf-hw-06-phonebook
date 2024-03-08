import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    createContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.contacts.filter(item => item.id !== payload);
    },
  },
});

export const contactsReduser = contactSlice.reducer;
export const { createContact, deleteContact } = contactSlice.actions;
