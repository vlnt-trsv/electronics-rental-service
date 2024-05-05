// Функция для усечения _id от 18 до 24 символов
export const getShortenId = (id: any) => {
  return id.substring(18, 24).toUpperCase();
};
