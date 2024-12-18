import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FetchProductsData, IProduct } from '../../types/types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/auth',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchAllProducts: builder.query<
      FetchProductsData,
      { limit: number; skip: number; searchQuery: string }
    >({
      query: ({ limit, skip, searchQuery }) => ({
        url: `/products/search?q=${searchQuery}`,
        params: {
          limit: limit,
          skip: skip,
        },
      }),
    }),

    fetchSingleProduct: builder.query<IProduct, { id: string }>({
      query: ({ id }) => ({
        url: `/products/${id}`,
      }),
    }),
  }),
});
