import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '../../types/types';

interface InitialStateProps {
  loadedProducts: IProduct[] | [];
  skip: number;
}

const initialState: InitialStateProps = {
  loadedProducts: [],
  skip: 0,
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setLoadedProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.loadedProducts = [...state.loadedProducts, ...action.payload];
    },
    setSkip: (state, action: PayloadAction<number>) => {
      state.skip = action.payload;
    },
    resetCatalog: (state) => {
      state.loadedProducts = [];
      state.skip = 0;
    },
  },
});

export const { setLoadedProducts, setSkip, resetCatalog } =
  catalogSlice.actions;

export default catalogSlice.reducer;
