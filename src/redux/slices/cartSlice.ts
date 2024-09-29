import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICart, ICartProduct } from '../../types/types';
import { fetchCartsByUserId, updateCart } from '../services/fetchCartsByUserId';

interface InitialStateProps {
  cart: ICart | null;
  deletedProducts: ICartProduct[] | [];
  loading: boolean;
  error: string | null;
}

const initialState: InitialStateProps = {
  cart: null,
  deletedProducts: [],
  loading: true,
  error: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setDeletedProduct: (state, action: PayloadAction<ICartProduct>) => {
      state.loading = true;
      state.deletedProducts = [...state.deletedProducts, { ...action.payload }];
      state.loading = false;
    },
    removeDeletedProduct: (state, action: PayloadAction<ICartProduct>) => {
      state.deletedProducts = state.deletedProducts.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },

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

export const { setDeletedProduct, removeDeletedProduct } = cartSlice.actions;

export default cartSlice.reducer;
