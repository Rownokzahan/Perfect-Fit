import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import wishlistReducer from "./features/wishlist/wishlistSlice";
import { dressApi } from "./features/api/dressApi";
import { userApi } from "./features/api/userApi";
import { cartApi } from "./features/api/cartApi";
import { orderApi } from "./features/api/orderApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    wishlist: wishlistReducer,
    [dressApi.reducerPath]: dressApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      dressApi.middleware,
      userApi.middleware,
      cartApi.middleware,
      orderApi.middleware
    ),
});
