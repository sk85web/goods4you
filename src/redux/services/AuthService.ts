import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IFetchUser } from '../../types/types';

export const authApi = createApi({
  reducerPath: 'authApi',
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
    loginUser: builder.mutation<
      IFetchUser,
      { username: string; password: string }
    >({
      query: ({ username, password }) => ({
        url: '/login',
        method: 'POST',
        body: {
          username,
          password,
          expiresInMins: 30,
        },
      }),
    }),

    getCurrentUser: builder.query<IFetchUser, void>({
      query: () => ({
        url: '/me',
        method: 'GET',
      }),
    }),
  }),
});

export const { useLoginUserMutation, useGetCurrentUserQuery } = authApi;
