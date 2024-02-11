import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

interface Subscription {
  id: string;
  product: string;
  categories: string[];
  subscriptionOption: string;
  deliveryMethod: string;
  totalPrice: number;
  status: string;
}

interface SubsState {
  subscriptions: Subscription[];
  subscriptionFilter: string[];
  selectedFilter: string;
}

const initialState: SubsState = {
  subscriptions: [],
  subscriptionFilter: [
    "Все",
    "Не оплачено",
    "Оплачено",
    "В аренде",
    "Завершено",
  ],
  selectedFilter: "Все",
};

const subsSlice = createSlice({
  name: "subs",
  initialState,
  reducers: {
    // Добавление подписки
    addSubscription: (state, action: PayloadAction<Subscription>) => {
      const newSubscription = {
        ...action.payload,
        id: v4(),
      };
      state.subscriptions.unshift(newSubscription);
    },

    // Выбор фильтрации
    setSelectedFilter: (state, action: PayloadAction<string>) => {
      state.selectedFilter = action.payload;
    },

    // Действие для установки статуса подписки
    setSubscriptionStatus: (
      state,
      action: PayloadAction<{ id: string; status: string }>
    ) => {
      const { id, status } = action.payload;
      const subscription = state.subscriptions.find((sub) => sub.id === id);
      if (subscription) {
        subscription.status = status;
      }
    },

    // Удаление подписки
    removeSubscription: (state, action: PayloadAction<{ id: string }>) => {
      state.subscriptions = state.subscriptions.filter(
        (sub) => sub.id !== action.payload.id
      );
    },
  },
});

export const {
  addSubscription,
  setSelectedFilter,
  setSubscriptionStatus,
  removeSubscription,
} = subsSlice.actions;
export default subsSlice.reducer;
