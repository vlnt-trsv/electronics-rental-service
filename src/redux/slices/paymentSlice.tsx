import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: null,
  reducers: {
    setPaymentInfo: (state, action) => action.payload,
  },
});

export const { setPaymentInfo } = paymentSlice.actions;
export default paymentSlice.reducer;
