import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cartApi = createApi({
  reducerPath: "cartApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/cart",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ["Cart"],

  endpoints: (builder) => ({
    createCart: builder.mutation({
      query: (cartData) => ({
        method: "POST",
        body: cartData,
      }),
      invalidatesTags: ["Cart"],
    }),

    /* Update (edit) cart. will create cart if not exist;  */
    createAndUpdateCart: builder.mutation({
      query: (cartData) => ({
        method: "PUT",
        body: cartData,
      }),
      invalidatesTags: ["Cart"],
    }),

    getCart: builder.query({
      query: () => ({}),
      providesTags: ["Cart"],
    }),

    addProductToCart: builder.mutation({
      query: (productId) => ({
        url: `/${productId}`,
        method: "PUT",
      }),
      invalidatesTags: ["Cart"],
    }),

    deleteProductFromTheCart: builder.mutation({
      query: (productId) => ({
        url: `/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),

    decreaseProductQuantity: builder.mutation({
      query: (productId) => ({
        url: `product/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
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
} = cartApi;

export default cartApi;
