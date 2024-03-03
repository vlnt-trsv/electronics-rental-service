import React, { useState, useEffect, useRef } from "react";
import styles from "./Preloader.module.scss";

interface PreloaderProps {
  isDataLoaded: boolean;
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isDataLoaded, isLoading }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDataLoaded) {
      // Плавное затухание прелоадера
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 1000); // Задержка перед скрытием прелоадера

      // Очищаем таймер при размонтировании компонента или при изменении isDataLoaded
      return () => clearTimeout(timer);
    }
    if (!isDataLoaded && !isLoading) {
      setErrorMessage("Личный кабинет временно недоступен. Попробуйте позже");
    }
  }, [isDataLoaded, isLoading]);

  useEffect(() => {
    if (!isVisible) {
      // Удаляем прелоадер после затухания
      const preloader = preloaderRef.current;
      if (preloader) {
        preloader.addEventListener("transitionend", () => {
          preloader.remove();
        });
      }
    }
  }, [isVisible]);

  return (
    <div
      ref={preloaderRef}
      className={`${styles.loader} ${isVisible ? styles.show : styles.hide}`}
    >
      {errorMessage ? (
        <div className={styles.errorMessage}>{errorMessage}</div>
      ) : (
        <div className={styles.spinner}></div>
      )}
    </div>
  );
};

export default Preloader;
