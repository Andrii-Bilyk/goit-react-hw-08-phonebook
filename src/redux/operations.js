import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchContacts = createAsyncThunk(
  'fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('contacts');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
    'addContact',
    async (body, thunkApi) => {
      try {
        const { data } = await axios.post('contacts', body);
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );

export const deleteContact = createAsyncThunk(
  'deleteContact',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`contacts/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

