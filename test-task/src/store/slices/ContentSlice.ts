import { createSlice } from '@reduxjs/toolkit';
import { CONTENT } from '../../constants';

const initialStateValue = {
    data: CONTENT,
    isInnerContent: false,
}

const contentSlice = createSlice({
  name: 'content',
  initialState: initialStateValue,
  reducers: {
    changeContent: (state, action) => {
      state.data = action.payload;
    },
  },
})

export const { changeContent } = contentSlice.actions;

export default contentSlice.reducer;