import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../../interface.model";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost" }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], undefined>({
      query: () => "/posts",
    }),
    addPost: builder.mutation<IPost, { token: string; posts: Partial<IPost> }>({
      query: ({ posts, token }) => ({
        url: "/posts",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: posts,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation } = postsApi;
