import { createSlice } from "@reduxjs/toolkit";

const deliverySlice = createSlice({
  name: "delivery",
  initialState: "Доставка",
  reducers: {
    selectDeliveryMethod: (state, action) => action.payload,
  },
});

export const { selectDeliveryMethod } = deliverySlice.actions;
export default deliverySlice.reducer;
