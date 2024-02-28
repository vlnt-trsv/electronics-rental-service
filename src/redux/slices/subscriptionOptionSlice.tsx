import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SubscriptionOption {
  id: number;
  duration: string;
  price: number;
}

interface SubscriptionOptionsState {
  selectedSubscription: SubscriptionOption | null;
  subscriptionOptions: SubscriptionOption[];
}

const initialState: SubscriptionOptionsState = {
  selectedSubscription: null,
  subscriptionOptions: [
    { id: 1, duration: "14 дней", price: 990 },
    { id: 2, duration: "1 месяц", price: 1899 },
    { id: 3, duration: "2 месяца", price: 2699 },
    { id: 4, duration: "3 месяца", price: 3499 },
  ],
};

const subscriptionOptionsSlice = createSlice({
  name: "subscriptionOptions",
  initialState,
  reducers: {
    setSelectedSubscriptionOption: (
      state,
      action: PayloadAction<SubscriptionOption | null>
    ) => {
      state.selectedSubscription = action.payload;
    },
  },
});

export const { setSelectedSubscriptionOption } =
  subscriptionOptionsSlice.actions;
export default subscriptionOptionsSlice.reducer;