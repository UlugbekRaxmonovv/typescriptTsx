import { configureStore } from "@reduxjs/toolkit";
import heartSlice from "./slice/heartSlice";
import cartSlice from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    heart: heartSlice,
    cart: cartSlice,
  },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;  