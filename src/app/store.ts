import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/userSlice/userSlice";
import postReducer from "../features/postSlice/postSlice";
import { postsApi } from "../services/post";
import { userApi } from "../services/user";

export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      postsApi.middleware,
      userApi.middleware
    );
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
