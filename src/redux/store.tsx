import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

// Вывод типов `RootState` и `AppDispatch` из самого магазина
export type RootState = ReturnType<typeof store.getState>;
// Предполагаемый тип: { posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
