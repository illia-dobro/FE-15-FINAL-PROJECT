import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getLocalStorage } from "../../helpers/localStorage.js";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api",
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token;
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`);
    //   } else if (getLocalStorage()) {
    //     headers.set('authorization', `Bearer ${getLocalStorage()}`);
    //   }
    //   return headers;
    // },
  }),
  keepUnusedDataFor: 0,
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: "auth/authenticated-user",
        method: "GET",
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/sign-in",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query(data) {
        return {
          url: "customers",
          method: "POST",
          body: data,
        };
      },
    }),
    categories: builder.query({
      query: () => ({
        url: "catalog",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetUserQuery,
  useCategoriesQuery,
} = api;
