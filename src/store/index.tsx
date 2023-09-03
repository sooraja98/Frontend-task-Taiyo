import { configureStore } from '@reduxjs/toolkit';
import contactsReducer, { addContact, editContact, deleteContact } from './Slice/ContactSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
export  { addContact, editContact, deleteContact };
