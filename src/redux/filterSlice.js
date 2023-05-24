import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    getContactsFilter(state, action) {
      return (state = action.payload.toLowerCase());
    },
  },
});

export const { getContactsFilter } = filterSlice.actions;
export const filterReduser = filterSlice.reducer;
