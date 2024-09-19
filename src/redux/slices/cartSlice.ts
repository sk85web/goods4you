import { createSlice } from '@reduxjs/toolkit';

import { ICart } from '../../types/types';
import { fetchCartsByUserId } from '../services/fetchCartsByUserId';

interface InitialStateProps {
  carts: ICart[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: InitialStateProps = {
  carts: null,
  loading: true,
  error: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCartsByUserId.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCartsByUserId.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.carts && action.payload.carts.length > 0) {
        state.carts = action.payload.carts;
      } else {
        state.carts = null;
      }
    });
    builder.addCase(fetchCartsByUserId.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default cartSlice.reducer;
