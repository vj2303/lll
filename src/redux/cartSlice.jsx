"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  discount: 0,
  appliedOffer: null, // Store the selected offer
  isOfferAppliedBottomSheetVisible: false, // Track if the Offer Applied Bottom Sheet should be visible
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action) {
      state.cart = action.payload;
    },
    addToCart(state, action) {
      const isAlreadyInCart = state.cart.some((ele) => ele.id === action.payload.id);
      if (isAlreadyInCart) return; // If item is already in the cart, do nothing
      state.cart.push(action.payload);
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    applyOffer(state, action) {
      state.appliedOffer = action.payload; // Store the applied offer object
      state.discount += action.payload.discount_percentage; // Add the discount percentage
      state.isOfferAppliedBottomSheetVisible = true; // Show the bottom sheet when an offer is applied
    },
    clearOffer(state) {
      state.appliedOffer = null; // Clear the applied offer
      state.discount = 0; // Reset the discount
      state.isOfferAppliedBottomSheetVisible = false; // Hide the bottom sheet
    },
    closeOfferAppliedBottomSheet(state) {
      state.isOfferAppliedBottomSheetVisible = false; // Action to close the bottom sheet manually
    },
  },
});

export const { 
  setCart, 
  addToCart, 
  removeFromCart, 
  applyOffer, 
  clearOffer, 
  closeOfferAppliedBottomSheet 
} = cartSlice.actions;

export default cartSlice.reducer;
