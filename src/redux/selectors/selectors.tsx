import { RootState } from "../store"; // Импортируйте тип корневого состояния вашего хранилища



// Создайте селекторы и определите типы для каждого из них
export const categories = (state: RootState) => state.categories;
export const selectProduct = (state: RootState) => state.products;
export const selectSubscription = (state: RootState) => state.subscriptionOptions;
// export const selectDeliveryMethod = (state: RootState) => state.delivery;
// export const selectPaymentInfo = (state: RootState) => state.payment;

