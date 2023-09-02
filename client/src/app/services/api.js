import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//import { getLocalStorage } from '../../helpers/localStorage.js';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://f-15.onrender.com/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User', 'Wish'],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: 'customers/customer',
        method: 'GET',
      }),
      providesTags: ['User'],
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: 'customers/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query(data) {
        return {
          url: 'customers',
          method: 'POST',
          body: data,
        };
      },
    }),
    updateUser: builder.mutation({
      query(data) {
        return {
          url: 'customers',
          method: 'PUT',
          body: data,
        };
      },
      invalidatesTags: ['User'],
    }),
    updatePassword: builder.mutation({
      query(data) {
        return {
          url: 'customers/password',
          method: 'PUT',
          body: data,
        };
      },
    }),
    createWishList: builder.mutation({
      query(data) {
        return {
          url: 'wishlist',
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['Wish'],
    }),
    updateWishList: builder.mutation({
      query(data) {
        return {
          url: 'wishlist',
          method: 'PUT',
          body: data,
        };
      },
      invalidatesTags: ['Wish'],
    }),
    addWishList: builder.mutation({
      query(id) {
        return {
          url: `wishlist/${id}`,
          method: 'PUT',
        };
      },
      invalidatesTags: ['Wish'],
    }),
    deleteProductWishList: builder.mutation({
      query(id) {
        return {
          url: `wishlist/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Wish'],
    }),
    getWishList: builder.query({
      query: () => ({
        url: 'wishlist',
        method: 'GET',
      }),
      providesTags: ['Wish'],
    }),
    getOrders: builder.query({
      query: () => ({
        url: 'orders',
        method: 'GET',
      }),
      providesTags: ['Orders'],
    }),
    getOrderById: builder.query({
      query: (id) => ({
        url: `orders/${id}`,
        method: 'GET',
      }),
    }),
    placeOrder: builder.mutation({
      query: (data) => ({
        url: 'orders',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Orders'],
    }),
    updateOrder: builder.mutation({
      query: (id, data) => ({
        url: `orders/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Orders'],
    }),
    cancelOrder: builder.mutation({
      query: (id) => ({
        url: `orders/cancel/${id}`,
        method: 'PUT',
      }),
      invalidatesTags: ['Orders'],
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `orders/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Orders'],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetUserQuery,
  useUpdateUserMutation,
  useUpdatePasswordMutation,
  useCreateWishListMutation,
  useGetWishListQuery,
  useUpdateWishListMutation,
  useDeleteProductWishListMutation,
  useAddWishListMutation,
  useGetOrdersQuery,
  useDeleteOrderMutation,
  useGetOrderByIdQuery,
  useCancelOrderMutation,
  useUpdateOrderMutation,
  usePlaceOrderMutation,
} = api;
