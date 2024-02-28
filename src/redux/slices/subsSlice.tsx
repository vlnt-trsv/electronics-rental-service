import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SubsState {
  selectedFilter: string;
}

const initialState: SubsState = {
  selectedFilter: "Все",
};

const subsSlice = createSlice({
  name: "subs",
  initialState,
  reducers: {
    // Выбор фильтрации
    setSelectedFilter: (state, action: PayloadAction<string>) => {
      state.selectedFilter = action.payload;
    },
  },
});

export const { setSelectedFilter } = subsSlice.actions;
export default subsSlice.reducer;
