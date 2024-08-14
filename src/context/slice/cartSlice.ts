
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PayloadSchema {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  images: string[];
}

export interface ProductsSchemaCart {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  images: string[];
  quantity: number;
}

export interface cartSlice {
  value: ProductsSchemaCart[];
}

const initialState: cartSlice = {
  value: JSON.parse(localStorage.getItem("cart") || "[]"),
};

export const cartSlice = createSlice({
  name: "heart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<PayloadSchema>) => {
      const index = state.value.findIndex(
        (i: ProductsSchemaCart) => i.id === action.payload.id
      );
      if (index < 0) {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    increment: (state, action: PayloadAction<PayloadSchema>) => {
      const index = state.value.findIndex(
        (i: ProductsSchemaCart) => i.id === action.payload.id
      );
      state.value = state.value.map((item: ProductsSchemaCart, inx: number) =>
        inx === index ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    decrement: (state, action: PayloadAction<PayloadSchema>) => {
      const index: number = state.value.findIndex(
        (i: ProductsSchemaCart) => i.id === action.payload.id
      );
      state.value = state.value.map((item: ProductsSchemaCart, inx: number) =>
        inx === index ? { ...item, quantity: item.quantity - 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    removeFromCart: (state, action: PayloadAction<PayloadSchema>) => {
      state.value = state.value.filter(
        (item: ProductsSchemaCart) => item.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    deleteAllCart: (state) => {
      state.value = [];
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
  },
});

export const {
  addToCart,
  decrement,
  deleteAllCart,
  increment,
  removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;   
