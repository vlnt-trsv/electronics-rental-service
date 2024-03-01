import React, { useState, useEffect } from "react";
import styles from "./Preloader.module.scss";

interface PreloaderProps {
  isDataLoaded: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isDataLoaded }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isDataLoaded) {
      // Плавное затухание прелоадера
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 1000); // Задержка перед скрытием прелоадера

      // Очищаем таймер при размонтировании компонента или при изменении isDataLoaded
      return () => clearTimeout(timer);
    }
  }, [isDataLoaded]);

  return (
    <div
      className={`${styles.loader} ${isVisible ? styles.show : styles.hide}`}
    >
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Preloader;
