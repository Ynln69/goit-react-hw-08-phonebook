import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const updateContact = (contactsArray, id, name, number) => {
  return contactsArray.map(contact => {
    if (contact.id === id) {
      return {
        id,
        name: name,
        number: number,
      };
    }
    return contact;
  });
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    return builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(task => task.id !== action.payload.id);
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const { id, name, number } = action.payload;
        const updatedContacts = updateContact(state.items, id, name, number);
        state.items = updatedContacts;
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected,
          editContact.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          toast.error('Something went wrong, try again please.');
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
