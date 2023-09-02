import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const catalogApi = createApi({
  reducerPath: 'catalogApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://f-15.onrender.com/api/catalog',
  }),

  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({}),
    }),
  }),
});

export const { useGetCategoriesQuery } = catalogApi;
export default catalogApi;
