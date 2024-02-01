// subscriptionOptionsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSubscription: null,
  subscriptionOptions: [
    { id: 1, duration: "14 дней", price: "3 999 ₽" },
    { id: 2, duration: "1 месяц", price: "3 999 ₽/мес" },
    { id: 3, duration: "2 месяца", price: "3 999 ₽/мес" },
    { id: 4, duration: "3 месяца", price: "3 999 ₽/мес" },
  ],
};

const subscriptionOptionsSlice = createSlice({
  name: "subscriptionOptions",
  initialState,
  reducers: {
    setSelectedSubscriptionOption: (state, action) => {
      state.selectedSubscription = action.payload;
    },
  },
});

export const { setSelectedSubscriptionOption } =
  subscriptionOptionsSlice.actions;
export default subscriptionOptionsSlice.reducer;
