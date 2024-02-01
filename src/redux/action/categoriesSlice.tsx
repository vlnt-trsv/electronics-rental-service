// categoriesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: null,
  categories: [
    {
      id: 1,
      name: "console",
      title: "Приставка",
      subtitle: "Стало скучно? Не парься, возьми в аренду приставку!",
      description: "Более 5 вариантов",
      imageUrl: "console.jpg",
      altText: "Приставки",
    },
    {
      id: 2,
      name: "projector",
      title: "Проекторы",
      subtitle: "Стало скучно? Не парься, возьми в аренду приставку!",
      description: "Более 5 вариантов",
      imageUrl: "console.jpg",
      altText: "Проекторы",
    },
    {
      id: 3,
      name: "laptop",
      title: "Ноутбуки",
      subtitle: "Стало скучно? Не парься, возьми в аренду приставку!",
      description: "Более 5 вариантов",
      imageUrl: "console.jpg",
      altText: "Ноутбуки",
    },
    {
      id: 4,
      name: "speaker",
      title: "Колонки",
      subtitle: "Стало скучно? Не парься, возьми в аренду приставку!",
      description: "Более 5 вариантов",
      imageUrl: "console.jpg",
      altText: "Колонки",
    },
  ],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
