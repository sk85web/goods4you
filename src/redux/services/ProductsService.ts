import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FetchProductsData } from '../../types/types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    fetchAllProducts: builder.query<FetchProductsData, number>({
      query: (limit: number) => ({
        url: '/products/search?q=',
        params: {
          limit: limit,
        },
      }),
    }),
  }),
});
