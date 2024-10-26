import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ENDPOINT = '/comments';
const BASE_URL = 'https://6709628baf1a3998baa15a26.mockapi.io';

export const commentApi = createApi({
  reducerPath: 'comments',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Comments'],
  endpoints: builder => ({
    getComments: builder.query({
      query: () => ({ url: API_ENDPOINT }),
    }),
  }),
});

export const { useGetCommentsQuery } = commentApi;
