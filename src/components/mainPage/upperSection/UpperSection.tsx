import { Button } from "@/components/ui/button";
import styles from "./UpperSection.module.scss";
import PSBG from "@/assets/imgs/ps5S.png";

const UpperSection = () => {
  return (
    <div className={`${styles.upper} container2`}>
      <div className={styles.upper__cta}>
        <span className={styles.upper__title}>
          Арендуйте на срок, который вам нужен
        </span>
        <Button size={"s48"} variant={"primary"}>
          Арендовать
        </Button>
      </div>
      <span className={styles.upper__subtitle}>Two2Buddy</span>
    </div>
  );
};

export default UpperSection;
