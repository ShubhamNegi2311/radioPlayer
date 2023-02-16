import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // default value will be null if the key/token does not exist
  data: null,
  loading: false,
  error: null,
};

const TestSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
});
