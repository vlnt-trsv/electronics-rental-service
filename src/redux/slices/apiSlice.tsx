import axios from "axios";

const _apiBase = "https://jsonplaceholder.typicode.com/";
const STORAGE_KEY = "apiData"; // Ключ для хранения данных в localStorage

export const fetchUserData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${_apiBase}/users`);
      const firstUser = response.data.length > 0 ? response.data[0] : null;
      
      dispatch({ type: "FETCH_USER_SUCCESS", payload: firstUser });
      
      // Если вы хотите также сохранить данные в localStorage, вы можете сделать это здесь
      localStorage.setItem(STORAGE_KEY, JSON.stringify(firstUser));
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
      dispatch({ type: "FETCH_USER_FAILURE", error });
    }
  };
};
