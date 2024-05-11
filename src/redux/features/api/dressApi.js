import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const dressApi = createApi({
  reducerPath: "dressApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Dresses"],
  endpoints: (build) => ({
    // Query to fetch all dresses
    getDresses: build.query({
      query: () => ({
        url: `/dresses`,
        method: "GET",
      }),
    }),

    // Query to fetch dress by id
    getDressById: build.query({
      query: (dress_id) => ({
        url: `/dresses/${dress_id}`,
        method: "GET",
      }),
    }),

    // Mutation to create a dress
    addDress: build.mutation({
      query: (dress) => ({
        url: "/dresses",
        method: "POST",
        body: dress,
      }),
      invalidatesTags: ["Dresses"],
    }),

    // Mutation to update a dress
    updateDress: build.mutation({
      query: ({ dress_id, updatedDress }) => ({
        url: `/dresses/${dress_id}`,
        method: "PUT",
        body: updatedDress,
      }),
      invalidatesTags: ["Dresses"],
    }),

    // Mutation to delete a dress
    deleteDress: build.mutation({
      query: (dress_id) => ({
        url: `/dresses/${dress_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Dresses"],
    }),
  }),
});

export const {
  useGetDressesQuery,
  useGetDressByIdQuery,
  useAddDressMutation,
  useUpdateDressMutation,
  useDeleteDressMutation,
} = dressApi;
