import { createSlice } from '@reduxjs/toolkit';

import { ICart } from '../../types/types';
import { fetchCartsByUserId, updateCart } from '../services/fetchCartsByUserId';

interface InitialStateProps {
  cart: ICart | null;
  loading: boolean;
  error: string | null;
}

const initialState: InitialStateProps = {
  cart: null,
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
      state.cart = action.payload;
    });
    builder.addCase(fetchCartsByUserId.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });

    builder.addCase(updateCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateCart.fulfilled, (state, action) => {
      state.loading = false;
      state.cart = action.payload;
    });
    builder.addCase(updateCart.rejected, (state, action) => {
      state.loading = true;
      state.error = action.error.message ?? null;
    });
  },
});

export default cartSlice.reducer;
