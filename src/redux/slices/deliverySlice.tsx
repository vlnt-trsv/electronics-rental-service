import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DeliveryState {
  method: string;
}

const initialState: DeliveryState = {
  method: "Доставка",
};

const deliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    selectDeliveryMethod: (state, action: PayloadAction<string>) => {
      state.method = action.payload;
    },
  },
});

export const { selectDeliveryMethod } = deliverySlice.actions;
export default deliverySlice.reducer;
