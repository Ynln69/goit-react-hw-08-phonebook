import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilteredContacts = state => state.filter;
export const getLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getVisibleContacts = createSelector(
  [getContacts, getFilteredContacts],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
