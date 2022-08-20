import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/userSlice/userSlice";
import { postsApi } from "../services/post";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(postsApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
