import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './authorization/slice';

export const store = configureStore({
  reducer: {
    contactsList: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});