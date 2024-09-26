import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchCartsData } from '../../types/types';
import { ICart } from '../../types/types';

export const fetchCartsByUserId = createAsyncThunk(
  'carts/fetchByUserId',
  async (userId: number) => {
    const token = localStorage.getItem('token');
    const response = await fetch(
      `https://dummyjson.com/auth/carts/user/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      }
    );

    if (response.status === 401) {
      localStorage.removeItem('token');
      throw new Error('Unauthorized');
    }

    const data: FetchCartsData = await response.json();
    return data.carts[0];
  }
);

export const updateCart = createAsyncThunk(
  'cart/updateCart',
  async ({
    cartId,
    products,
  }: {
    cartId: number;
    products: { id: number; quantity: number }[];
  }) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`https://dummyjson.com/auth/carts/${cartId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        merge: false,
        products,
      }),
    });

    if (response.status === 401) {
      localStorage.removeItem('token');
      throw new Error('Unauthorized');
    }

    const data: ICart = await response.json();
    return data;
  }
);
