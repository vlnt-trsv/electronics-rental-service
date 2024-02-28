import { Action, ThunkDispatch, configureStore } from "@reduxjs/toolkit";
// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import rootReducer from "./rootReducer";
import persistConfig from "./persistConfig";
import { api } from "./slices/api/api";
// import { setupListeners } from "@reduxjs/toolkit/query";

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

// // Вывод типов `RootState` и `AppDispatch` из самого магазина
// export type RootState = ReturnType<typeof store.getState>;
// // Предполагаемый тип: { posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch &
//   ThunkDispatch<RootState, void, Action>;
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// setupListeners(store.dispatch);
export const persistor = persistStore(store);
