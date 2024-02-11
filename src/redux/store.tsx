import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { login } from "./slices/auth/authSlice";

const storedToken = localStorage.getItem("authToken");

interface AuthState {
  isAuthenticated: boolean;
  user: {
    _id: null;
    email: null;
    token: string | null;
  };
  error: null;
}

const initialState: AuthState = {
  isAuthenticated: !!storedToken,
  user: {
    _id: null,
    email: null,
    token: storedToken || null,
  },
  error: null,
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: initialState,
});

// Если токен был найден в localStorage, выполните вход пользователя
if (storedToken) {
  const userData = JSON.parse(atob(storedToken.split(".")[1])); // раскодируйте токен, чтобы получить данные пользователя
  store.dispatch(login(userData));
}

// Вывод типов `RootState` и `AppDispatch` из самого магазина
export type RootState = ReturnType<typeof store.getState>;
// Предполагаемый тип: { posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
