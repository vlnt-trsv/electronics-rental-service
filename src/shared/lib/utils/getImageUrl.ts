export const getImageUrl = (fileName: string): any | undefined => {
  return `${import.meta.env.VITE_MAIN_URL}/${fileName}`;
};
