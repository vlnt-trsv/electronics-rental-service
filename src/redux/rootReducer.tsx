import { combineReducers } from "redux";

import categoriesReducer from "./action/categoriesSlice";
import productsReducer from "./action/productsSlice";
import subscriptionOptionsReducer from "./action/subscriptionOptionSlice";
// import deliveryReducer from "./action/deliverySlice";
// import paymentReducer from "./action/paymentSlice";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  subscriptionOptions: subscriptionOptionsReducer,
  // delivery: deliveryReducer,
  // payment: paymentReducer,
});

export default rootReducer;
