import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axiosInstance";

// Асинхронное действие для входа пользователя
export const loginUser = createAsyncThunk("enterPage", async (email) => {
  try {
    const response = await axiosInstance.post(
      "/user/login", // Используем axiosInstance вместо axios и указываем относительный путь
      { email }
    );
    return response.data; // Возвращаемые данные, если запрос выполнен успешно
  } catch (error) {
    throw Error(error.response.data.error); // Бросаем ошибку, если запрос завершается с ошибкой
  }
});

// Асинхронное действие для верификации кода
export const sendCode = createAsyncThunk(
  "enterPage/enterClient",
  async ({ email, code }) => {
    try {
      const response = await axiosInstance.post(
        "/user/login/verify", // Используем axiosInstance вместо axios и указываем относительный путь
        { email, code }
      );
      return response.data; // Возвращаемые данные, если запрос выполнен успешно
    } catch (error) {
      throw Error(error.response.data.error); // Бросаем ошибку, если запрос завершается с ошибкой
    }
  }
);
