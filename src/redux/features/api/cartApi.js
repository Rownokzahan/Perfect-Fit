import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.API_BASE_URL;

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Cart"],
  endpoints: (build) => ({
    // Query to fetch all items from the cart by user ID
    getCartItemsByUserId: build.query({
      query: (userId) => ({
        url: `/cart/${userId}`,
        method: "GET",
      }),
    }),

    // Mutation to add an item to the cart
    addToCart: build.mutation({
      query: (item) => ({
        url: "/cart",
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["Cart"],
    }),

    // Mutation to remove an item from the cart
    removeFromCart: build.mutation({
      query: (itemId) => ({
        url: `/cart/${itemId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),

    // Mutation to clear the entire cart
    clearCart: build.mutation({
      query: () => ({
        url: "/cart/clear",
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useGetCartItemsByUserIdQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useClearCartMutation,
} = cartApi;
