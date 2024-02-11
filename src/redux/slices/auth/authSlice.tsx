import { createSlice } from "@reduxjs/toolkit";
// import { ROLE } from "./role";
import { loginUser, sendCode } from "../api";

interface AuthState {
  isAuthenticated: boolean;
  user: {
    _id: null;
    email: null;
    token: string | null;
  };
  error: null | string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: {
    _id: null,
    email: null,
    token: null,
  },
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      const { _id, email, token } = action.payload;
      state.user = { _id, email, token };
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = { _id: null, email: null, token: null };
    },
    setUser: (state, action) => {
      state.user.email = action.payload;
    },
    // Дополнительные редьюсеры по мере необходимости
  },
  extraReducers: (builder) => {
    // Обработка результата запроса входа
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const { _id, email, token } = action.payload.user;
      state.isAuthenticated = true;
      state.user = { _id, email, token };
      state.error = null;

      localStorage.setItem("authToken", token);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.error.message;
    });
    
    builder.addCase(sendCode.fulfilled, (state, action) => {
      // Обработка успешного отправления кода, если нужно
    });
    builder.addCase(sendCode.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const { setUser, login } = authSlice.actions;
export default authSlice.reducer;
