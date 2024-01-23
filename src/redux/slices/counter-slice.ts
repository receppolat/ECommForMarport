import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    incCount: state => {
      return state + 1;
    },
    decCount: state => {
      return state - 1;
    },
    reset: () => {
      return 0;
    },
  },
});

export default counterSlice.reducer;
export const {incCount, decCount, reset} = counterSlice.actions;
