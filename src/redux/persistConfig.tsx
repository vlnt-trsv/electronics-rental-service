import storage from "redux-persist/lib/storage";
// import { useSelector } from "react-redux";

// const userId = useSelector((state:any) => {state.persistedReducer.user.user._id})

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["persistedReducer"],
  //   blacklist: ["api.reducerPath"],
  timeout: 0,
  version: 1,
  throttle: 500,
};

export default persistConfig;
