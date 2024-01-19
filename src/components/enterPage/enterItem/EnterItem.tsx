import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

import styles from "./EnterItem.module.scss";
import { Button } from "@/components/ui/button";

const EnterItem = () => {
  return (
    <div className={styles.enter}>
      <div className={`${styles.enter__content} content`}>
        <span className={styles.enter__title}>Вход в личный кабинет</span>
        {/* <Link to={"enterClient"}></Link> */}
        <Input
          ref={undefined}
          type="tel"
          placeholder="Телефон"
          className={styles.enter__input}
        />
        <Button className={styles.enter__button} variant="default" size="lg">Войти</Button>
        <Link to={"/"} className={styles.enter__link}>
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default EnterItem;
