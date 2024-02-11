import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PaymentState {
  invoices: any[];
  subscriptions: any[];
}

const initialState: PaymentState = {
  invoices: [],
  subscriptions: [],
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    addSubscription: (state, action: PayloadAction<any>) => {
      state.subscriptions.push(action.payload);
    },
    updateSubscription: (
      state,
      action: PayloadAction<{ id: string; updatedData: any }>
    ) => {
      const { id, updatedData } = action.payload;
      const subscription = state.subscriptions.find((sub) => sub.id === id);
      if (subscription) {
        // Обновите поля подписки согласно updatedData
        subscription.field1 = updatedData.field1;
        subscription.field2 = updatedData.field2;
        // и так далее
      }
    },
  },
});

export const { addSubscription, updateSubscription } = paymentSlice.actions;
export default paymentSlice.reducer;
