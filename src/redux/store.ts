import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/slices/cartSlice';
import catalogReducer from '../redux/slices/catalogSlice';
import { productsApi } from './services/ProductsService';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    catalog: catalogReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
