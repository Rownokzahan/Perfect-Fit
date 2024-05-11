import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import { dressApi } from "./features/api/dressApi";
import { userApi } from "./features/api/userApi";
import { cartApi } from "./features/api/cartApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [dressApi.reducerPath]: dressApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      dressApi.middleware,
      userApi.middleware,
      cartApi.middleware
    ),
});
