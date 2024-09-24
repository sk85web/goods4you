import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IFetchUser } from '../../types/types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<
      IFetchUser,
      { username: string; password: string }
    >({
      query: ({ username, password }) => ({
        url: '/auth/login',
        method: 'POST',
        body: {
          username,
          password,
          expiresInMins: 30,
        },
      }),
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
