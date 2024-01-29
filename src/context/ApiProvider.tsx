// // Вставить в файл, где необходимы данные
// const data = useContext(ApiContext);
// console.log(data);


import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Создаем контекст для передачи данных
export const ApiContext = createContext<ApiData | null>(null);

// const _apiBase = "http://localhost:8000/api/v1";
const _apiBase = "https://jsonplaceholder.typicode.com/";
const STORAGE_KEY = "apiData"; // Ключ для хранения данных в localStorage

interface ApiData {
  data: null;
  name: String;
  username: String;
}

const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<ApiData | null>(null);

  useEffect(() => {
    // Попытайтесь загрузить данные из localStorage
    const cachedData = localStorage.getItem(STORAGE_KEY);

    if (cachedData) {
      setData(JSON.parse(cachedData));
    } else {
      // Если данные отсутствуют в localStorage, выполните запрос к API
      axios
        .get(`${_apiBase}/users`)
        .then((response) => {
          const firstUser = response.data.length > 0 ? response.data[0] : null;
          setData(firstUser);

          // Сохраните данные в localStorage для кэширования
          localStorage.setItem(STORAGE_KEY, JSON.stringify(firstUser));
        })
        .catch((error) => {
          console.error("Ошибка при получении данных:", error);
        });
    }
  }, []);

  return <ApiContext.Provider value={data}>{children}</ApiContext.Provider>;
};

export default ApiProvider;
