import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  heart_count: 0,
  heart_active: false,
  cart_count: 0,
};

const CartStore = createSlice({
  name: "cart",
  initialState,
  reducers: {
    heart_increment: (state) => {
      state.heart_count += 1;
      toast.success("Success Add To wishList!");
    },
    heart_decrement: (state) => {
      state.heart_count -= 1;
    },
    cart_increment: (state) => {
      state.cart_count += 1;
      toast.success("Success Add To Cart!");
    },
    cart_decrement: (state) => {
      state.cart_count -= 1;
    },
  },
});

export default CartStore.reducer;
export const {
  heart_decrement,
  heart_increment,
  cart_increment,
  cart_decrement,
} = CartStore.actions;
