import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import { userApi } from "./features/api/userApi";

export const store = configureStore({
  reducer: {
    authSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
