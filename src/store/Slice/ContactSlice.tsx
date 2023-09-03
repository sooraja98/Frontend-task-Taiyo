// contactsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
}

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const { id } = action.payload;
      const existingContact = state.contacts.find((contact) => contact.id === id);
      if (existingContact) {
        // Update the existing contact with the new data (action.payload)
        Object.assign(existingContact, action.payload);
      }
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      const contactId = action.payload;
      state.contacts = state.contacts.filter((contact) => contact.id !== contactId);
    },
  },
});
export type { Contact };
export const { addContact, editContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
