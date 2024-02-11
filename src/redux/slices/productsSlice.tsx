import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
  console: Product[];
  projector: Product[];
  laptop: Product[];
  speaker: Product[];
}

const initialState: ProductsState = {
  selectedProduct: null,
  console: [
    {
      id: 1,
      name: "ps5",
      title: "Playstation 5",
      price: "от 990 ₽",
      imageUrl: "ps5.jpg",
      altText: "Playstation 5",
    },
    {
      id: 2,
      name: "ps5",
      title: "Playstation 5",
      price: "от 990 ₽",
      imageUrl: "ps5.jpg",
      altText: "Playstation 5",
    },
    {
      id: 3,
      name: "ps4",
      title: "Playstation 4",
      price: "от 990 ₽",
      imageUrl: "ps4.jpg",
      altText: "Playstation 4",
    },
    {
      id: 4,
      name: "ps4",
      title: "Playstation 4",
      price: "от 990 ₽",
      imageUrl: "ps4.jpg",
      altText: "Playstation 4",
    },
    {
      id: 5,
      name: "ps4",
      title: "Playstation 4",
      price: "от 990 ₽",
      imageUrl: "ps4.jpg",
      altText: "Playstation 4",
    },
    // Другие продукты
  ],
  projector: [
    {
      id: 1,
      name: "projector",
      title: "Dell",
      price: "от 990 ₽",
      imageUrl: "dell.jpg",
      altText: "Dell",
    },
    {
      id: 2,
      name: "projector",
      title: "Dell",
      price: "от 990 ₽",
      imageUrl: "dell.jpg",
      altText: "Dell",
    },
  ],
  laptop: [
    {
      id: 1,
      name: "Omen",
      title: "Omen",
      price: "от 990 ₽",
      imageUrl: "Omen.jpg",
      altText: "Omen",
    },
  ],
  speaker: [
    {
      id: 1,
      name: "speaker",
      title: "JBL [#011]",
      price: "от 990 ₽",
      imageUrl: "jbl.jpg",
      altText: "jbl",
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setSelectedProduct } = productsSlice.actions;
export default productsSlice.reducer;
