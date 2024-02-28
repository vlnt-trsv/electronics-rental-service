import { Button } from "@/components/ui/button";
import styles from "./CtaInfo.module.scss";

const CtaInfo = () => {
  return (
    <div className={styles.cta}>
      <div className={styles.cta__wrapper}>
        <span className={styles.cta__title}>
          Чего ждёшь? Скорее беги аредуй какой нибудь товар!
        </span>
        <span className={styles.cta__subtitle}>
          Другие могут перехватить твою аренду, но это конечно не точно
        </span>
        <Button className={styles.cta__button} size={"s48"} variant={"primary"}>
          Арендовать
        </Button>
      </div>
    </div>
  );
};

export default CtaInfo;
