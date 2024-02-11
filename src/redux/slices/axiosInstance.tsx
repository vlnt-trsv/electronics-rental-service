import axios from "axios";

// Экземпляр Axios с общими настройками, включая заголовок с токеном
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1", // ваш базовый URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Перехватчик запроса для включения токена в заголовок
axiosInstance.interceptors.request.use(
  (config) => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      config.headers["Authorization"] = `Bearer ${storedToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
