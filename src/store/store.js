import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import { authApi } from "./auth/authService";
import storySlice from "./story/storySlice";


export const store = configureStore({
  reducer: {
    auth: authSlice,
    story: storySlice,
    // [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
