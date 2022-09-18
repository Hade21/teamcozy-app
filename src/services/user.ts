import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ILogin, IRegister, IUser } from "../../interface.model";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost" }),
  endpoints: (builder) => ({
    login: builder.mutation<ILogin, Partial<IUser>>({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation<IRegister, Partial<IUser>>({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = userApi;
