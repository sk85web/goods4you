import { createSlice } from '@reduxjs/toolkit';

import { ICart } from '../../types/types';
import { fetchCartsByUserId } from '../../api/requests/fetchCartsByUserId';

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
      if (action.payload.carts && action.payload.carts.length > 0) {
        state.cart = action.payload.carts[0];
      } else {
        state.cart = null;
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
