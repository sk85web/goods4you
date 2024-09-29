import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchCartsData } from '../../types/types';

export const fetchCartsByUserId = createAsyncThunk(
  'carts/fetchByUserId',
  async (userId: string) => {
    const response = await fetch(`https://dummyjson.com/carts/user/${userId}`);
    const data: FetchCartsData = await response.json();
    return data;
  }
);
