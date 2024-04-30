import React from "react";
import styles from "./LoadingError.module.scss";

interface LoadingErrorProps {
  isLoading: boolean;
  isError: boolean;
  loadingMessage?: string;
  errorMessage?: string;
}

const LoadingError: React.FC<LoadingErrorProps> = ({
  isLoading,
  isError,
  loadingMessage = "",
  errorMessage = "Ошибка при загрузке данных",
}) => {
  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loader}>{loadingMessage}</div>
      </div>
    );
  }
  if (isError) {
    return <div className={styles.error}>{errorMessage}</div>;
  }
  return null;
};

export default LoadingError;
