import { createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  title: string;
  price: string;
  imageUrl: string;
  altText: string;
}

interface ProductsState {
  selectedProduct: Product | null;
  categoryProducts: any;
}

const initialState: ProductsState = {
  selectedProduct: null,
  categoryProducts: {},
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setProducts: (state, action) => {
      state.categoryProducts = action.payload;
    },
  },
});

export const { setSelectedProduct, setProducts } = productsSlice.actions;
export default productsSlice.reducer;
