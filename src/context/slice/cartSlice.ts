
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

 interface Products {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];  
  image:string
}

export  interface WishlistState {
  value: Products[];
}

const initialState: WishlistState = {
  value: JSON.parse(localStorage.getItem("wishlist") || "[]"),
};

const wishlistSlice  = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleHeart: (state, action: PayloadAction<Products>) => {
      const index = state.value.findIndex((i) => i.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, action.payload];
      } else {
        state.value = state.value.filter((i) => i.id !== action.payload.id);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.value));
    },
  },
});

export const { toggleHeart } = wishlistSlice.actions;
export default wishlistSlice.reducer;
