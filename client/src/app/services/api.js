import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getLocalStorage } from '../../utils/localStorage';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://binary-travel-app.xyz/api/v1/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
        headers.set('mode', 'no-cors');
      } else if (getLocalStorage()) {
        headers.set('authorization', `Bearer ${getLocalStorage()}`);
      }
      return headers;
    },
  }),
  tagTypes: ['user'],
  keepUnusedDataFor: 0,
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: 'auth/authenticated-user',
        method: 'GET',
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: 'auth/sign-in',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query(data) {
        return {
          url: 'auth/sign-up',
          method: 'POST',
          body: data,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetUserQuery } = api;
