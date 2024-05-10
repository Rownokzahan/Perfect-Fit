import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Carts"],
  endpoints: (build) => ({
    // Query to fetch all items from the cart by user ID
    getCartItemsByUserId: build.query({
      query: (userId) => ({
        url: `/carts/${userId}`,
        method: "GET",
      }),
    }),

    // Mutation to add an item to the cart
    addToCart: build.mutation({
      query: ({ userId, item }) => ({
        url: `/carts/${userId}/items`,
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["Carts"],
    }),

    // Mutation to remove an item from the cart
    removeFromCart: build.mutation({
      query: ({ userId, itemId }) => ({
        url: `/carts/${userId}/items/${itemId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Carts"],
    }),

    // Mutation to clear the entire cart
    clearCart: build.mutation({
      query: (userId) => ({
        url: `/carts/${userId}/clear`,
        method: "DELETE",
      }),
      invalidatesTags: ["Carts"],
    }),
  }),
});

export const {
  useGetCartItemsByUserIdQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useClearCartMutation,
} = cartApi;
