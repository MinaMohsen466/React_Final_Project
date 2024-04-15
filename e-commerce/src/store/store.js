import { configureStore } from "@reduxjs/toolkit";
import cartStore from "./cartStore";

export const store = configureStore({
  reducer: {
    counter: cartStore,
  },
});
