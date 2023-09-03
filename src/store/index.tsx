import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './Slice/ContactSlice'
import {addContact, editContact, deleteContact } from './Slice/ContactSlice'
const store=configureStore({
    reducer:{
        contacts:contactsReducer
    }
})


export default store
export {addContact, editContact, deleteContact }