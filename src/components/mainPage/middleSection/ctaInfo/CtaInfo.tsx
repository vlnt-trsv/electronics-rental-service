import { Button } from "@/components/ui/button";
import styles from "./CtaInfo.module.scss";
import { Link } from "react-router-dom";

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
        <Link style={{ width: "100%" }} to={"/accountPage/devices"}>
          <Button style={{ width: "100%" }} size={"s48"} variant={"primary"}>
            Арендовать
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CtaInfo;
