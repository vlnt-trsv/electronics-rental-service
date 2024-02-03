import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
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
    addSubscription: (state, action) => {
      const newSubscription = {
        id: v4(),
        product: action.payload.product,
        categories: action.payload.categories,
        subscriptionOption: action.payload.subscriptionOption,
        deliveryMethod: action.payload.deliveryMethod,
        totalPrice: action.payload.totalPrice,
      };
      state.subscriptions.unshift(newSubscription);
    },

    // Выбор фильтрации
    setSelectedFilter: (state, action) => {
      state.selectedFilter = action.payload;
    },
    
    // Действие для установки статуса подписки
    setSubscriptionStatus: (state, action) => {
      const { id, status } = action.payload;
      const subscription = state.subscriptions.find((sub) => sub.id === id);
      if (subscription) {
        subscription.status = status;
      }
    },
  },
});

export const { addSubscription, setSelectedFilter, setSubscriptionStatus } = subsSlice.actions;
export default subsSlice.reducer;
