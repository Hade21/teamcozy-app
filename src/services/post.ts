import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IPost {
  caption?: string;
  creator?: string;
  _id?: string;
  tags?: string[];
  selectedFile?: string;
  likeCount?: number;
  createdAt?: Date;
}
export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], undefined>({
      query: () => "/posts",
    }),
    addPost: builder.mutation<IPost, undefined>({
      query: (posts) => ({
        url: "/posts",
        method: "POST",
        body: posts,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation } = postsApi;
