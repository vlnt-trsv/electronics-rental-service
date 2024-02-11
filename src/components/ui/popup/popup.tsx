import { useState } from "react";
import styles from "./popup.module.scss";

const Popup = ({ isOpen, onClose, children }) => {
  // Состояние для управления видимостью всплывающего окна
  const [isVisible, setIsVisible] = useState(isOpen);

  // Обработчик для закрытия всплывающего окна
  const handleClose = () => {
    setIsVisible(false);
    onClose && onClose();
  };

  // Если isVisible равно false, всплывающее окно не будет отображаться
  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.popup}>
      <div className={styles.popup__container}>
        <div className={styles.popup__wrapper}>
          <div className={styles.popup__content}>
            <button className={styles.closeButton} onClick={handleClose}>
              Закрыть
            </button>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
