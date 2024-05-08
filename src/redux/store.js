import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import { userApi } from "./features/api/userApi";
import { cartApi } from "./features/api/cartApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [userApi.reducerPath]: userApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, cartApi.middleware),
});
