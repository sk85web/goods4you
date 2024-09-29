import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/slices/cartSlice';
import catalogReducer from '../redux/slices/catalogSlice';
import userReducer from '../redux/slices/userSlice';
import { productsApi } from './services/ProductsService';
import { authApi } from './services/AuthService';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    catalog: catalogReducer,
    user: userReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
