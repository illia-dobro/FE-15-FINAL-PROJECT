import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cartApi = createApi({
  reducerPath: 'cartApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://f-15.onrender.com/api/cart',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    createCart: builder.mutation({
      query: (cartData) => ({
        method: 'POST',
        body: cartData,
      }),
    }),

    /* Update (edit) cart. will create cart if not exist;  */
    createAndUpdateCart: builder.mutation({
      query: (cartData) => ({
        method: 'PUT',
        body: cartData,
      }),
    }),

    getCart: builder.query({
      query: () => ({}),
      providesTags: ['Cart'],
    }),

    addProductToCart: builder.mutation({
      query: (productId) => ({
        url: `/${productId}`,
        method: 'PUT',
      }),
      invalidatesTags: ['Cart'],
    }),

    deleteProductFromTheCart: builder.mutation({
      query: (productId) => ({
        url: `/${productId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cart'],
    }),

    decreaseProductQuantity: builder.mutation({
      query: (productId) => ({
        url: `product/${productId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cart'],
    }),
    deleteCart: builder.mutation({
      query: () => ({
        url: '',
        method: 'DELETE',
      }),
      invalidatesTags: ['Cart'],
    }),
  }),
});

export const {
  useCreateAndUpdateCartMutation,
  useDeleteProductFromTheCartMutation,
  useAddProductToCartMutation,
  useDecreaseProductQuantityMutation,
  useCreateCartMutation,
  useGetCartQuery,
  useDeleteCartMutation,
} = cartApi;

export default cartApi;
