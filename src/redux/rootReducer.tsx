import { combineReducers } from "redux";

import { api } from "../api/api";
import categories from "./slices/categoriesSlice";
import products from "./slices/productsSlice";
import subscriptionOptions from "./slices/subscriptionOptionSlice";
import subs from "./slices/subsSlice";
import payment from "./slices/paymentSlice";
import user from "./slices/user/userSlice";
// import deliveryReducer from "./action/deliverySlice";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  categories,
  products,
  subscriptionOptions,
  subs,
  payment,
  user,
  // delivery: deliveryReducer,
});

export default rootReducer;
