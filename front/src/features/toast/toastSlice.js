import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const toastSlice = createSlice({
  name: 'toast',
  initialState: {},
  reducers: {
    showToast: (_, action) => {
      const { message, type } = action.payload;
      toast[type](message);
    },
  },
});

export const { showToast } = toastSlice.actions;
export default toastSlice.reducer;
