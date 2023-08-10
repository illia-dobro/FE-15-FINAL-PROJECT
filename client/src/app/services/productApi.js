import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productApi = createApi({
  reducerPath: 'productApi',

  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/products' }),

  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({})
    }),
    getProductByNumber: builder.query({
      query: (itemNo) => `/${itemNo}`,
    })
  })

});

export const { useGetAllProductsQuery, useGetProductByNumberQuery} = productApi;
export default productApi;
