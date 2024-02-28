import { useRef } from "react";
import styles from "./popup.module.scss";
import { Button } from "../button";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  onConfirm,
  children,
}) => {
  // Ref для контейнера попапа
  const popupRef = useRef<HTMLDivElement>(null);

  // Если попап не открыт, не рендерим его
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.popup}>
      <div className={styles.popup__container} ref={popupRef}>
        <div className={styles.popup__content}>
          {children}
          <div className={styles.popup__form}>
            <Button size={"lg"} variant={"ghost"} onClick={onClose}>
              Отменить
            </Button>
            <Button size={"lg"} variant={"danger"} onClick={onConfirm}>
              Подтвердить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
