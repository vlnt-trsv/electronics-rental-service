import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "@/utils/axiosInstance";
import Cookies from "js-cookie";

export const sendCode = createAsyncThunk(
  "auth/sendCode",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/login", {
        email: email,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const verifyCode = createAsyncThunk(
  "auth/verifyCode",
  async ({ email, code }, { rejectWithValue }) => {
    try {
      // Получение sessionId из cookies
      const sessionId = Cookies.get("connect.sid");
      console.log("Auth",sessionId);
      console.log("Doc",document.cookie)

      // Добавление sessionId в headers запроса
      const config = {
        headers: {
          "X-SESSION-ID": sessionId || "",
        },
        withCredentials: true,
      };

      const response = await axiosInstance.post(
        "login/verify",
        { email, code },
        config
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: {},
    email: "",
    error: null,
    loading: false,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendCode.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendCode.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(sendCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(verifyCode.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyCode.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.email = action.payload.email;
      })
      .addCase(verifyCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setEmail } = authSlice.actions;
export default authSlice.reducer;
