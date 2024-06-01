import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("wishlist")) || [];

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, { payload }) => {
      const newState = [payload, ...state];
      localStorage.setItem("wishlist", JSON.stringify(newState));
      return newState;
    },
    removeFromWishlist: (state, action) => {
      const newState = state.filter((id) => id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
