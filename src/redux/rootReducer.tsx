import { combineReducers } from "redux";

import categoriesReducer from "./slices/categoriesSlice";
import productsReducer from "./slices/productsSlice";
import subscriptionOptionsReducer from "./slices/subscriptionOptionSlice";
import subsSliceReducer from "./slices/subsSlice";
// import deliveryReducer from "./action/deliverySlice";
// import paymentReducer from "./action/paymentSlice";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  subscriptionOptions: subscriptionOptionsReducer,
  subs: subsSliceReducer,
  // delivery: deliveryReducer,
  // payment: paymentReducer,
});

export default rootReducer;
