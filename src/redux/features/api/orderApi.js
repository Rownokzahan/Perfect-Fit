import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Orders"],
  endpoints: (build) => ({
    // Query to fetch all orders by user ID
    getOrdersByUserId: build.query({
      query: (userId) => ({
        url: `/orders/${userId}/order`,
        method: "GET",
      }),
      providesTags: ["Orders"],
    }),

    // Mutation to create a new order for a user
    createOrder: build.mutation({
      query: ({ userId, order }) => ({
        url: `/orders/${userId}/order`,
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["Orders"],
    }),

    // Mutation to cancel an order for a user
    cancelOrder: build.mutation({
      query: ({ userId, orderId }) => ({
        url: `/orders/${userId}/order/${orderId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Order"],
    }),
  }),
});

export const {
  useGetOrdersByUserIdQuery,
  useCreateOrderMutation,
  useCancelOrderMutation,
} = orderApi;
