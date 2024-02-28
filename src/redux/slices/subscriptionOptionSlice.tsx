import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SubscriptionOption {
  _id: number;
  duration: string;
  price: number;
}

interface SubscriptionOptionsState {
  selectedSubscription: SubscriptionOption | null;
  subscriptionOptions: SubscriptionOption[];
}

const initialState: SubscriptionOptionsState = {
  selectedSubscription: null,
  subscriptionOptions: [],
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
