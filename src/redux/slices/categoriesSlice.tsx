import { createSlice } from "@reduxjs/toolkit";

interface Category {
  id: number;
  name: string;
  title: string;
  subtitle: string;
  description: string | number;
  imageUrl: string;
  altText: string;
}

interface CategoriesState {
  selectedCategory: Category | null;
  categories: Category[];
  // status: "idle" | "loading" | "succeeded" | "failed";
  // error: string | null;
}

const initialState: CategoriesState = {
  selectedCategory: null,
  categories: [],
  // status: "idle",
  // error: null,
};
// categories: [
//   {
//     id: 1,
//     name: "console",
//     title: "Приставка",
//     subtitle: "Стало скучно? Не парься, возьми в аренду приставку!",
//     description: "",
//     imageUrl: "console.jpg",
//     altText: "Приставки",
//   },
//   {
//     id: 2,
//     name: "projector",
//     title: "Проекторы",
//     subtitle: "Просмотр фильмов приятен с проектором",
//     description: "",
//     imageUrl: "console.jpg",
//     altText: "Проекторы",
//   },
//   {
//     id: 3,
//     name: "laptop",
//     title: "Ноутбуки",
//     subtitle: "Работа, время, деньги. Арендуйте ноутбук!",
//     description: "",
//     imageUrl: "console.jpg",
//     altText: "Ноутбуки",
//   },
//   {
//     id: 4,
//     name: "speaker",
//     title: "Колонки",
//     subtitle: "Музыка даёт стимул, возьми её в аренду",
//     description: "",
//     imageUrl: "console.jpg",
//     altText: "Колонки",
//   },
// ],

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setCategory: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setSelectedCategory, setCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
