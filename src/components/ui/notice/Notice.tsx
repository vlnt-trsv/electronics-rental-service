import React from "react";
import styles from "./Notice.module.scss";

interface NoticeProps {
  data: any[];
  isLoading: boolean;
  isError: boolean;
  message: string;
}

const Notice: React.FC<NoticeProps> = ({
  data,
  isLoading,
  isError,
  message,
}) => {
  let noticeContent = null;

  if (isLoading) {
    noticeContent = <div className={styles.notice__info}>Загрузка...</div>;
  } else if (isError) {
    noticeContent = (
      <div className={styles.notice__info}>Ошибка при загрузке данных</div>
    );
  } else if (Array.isArray(data) && data.length === 0) {
    noticeContent = <div className={styles.notice__info}>{message}</div>;
  }

  return <div className={styles.notice}>{noticeContent}</div>;
};

export default Notice;
