import { Button } from "@/shared/ui/button/button";
import styles from "./UpperSection.module.scss";
import { Link } from "react-router-dom";

export default function UpperSection() {
  return (
    <div className={`${styles.upper} container2`}>
      <div className={styles.upper__cta}>
        <span className={styles.upper__title}>
          Арендуйте на срок, который вам нужен
        </span>
        <Link to={"/accountPage/devices"}>
          <Button style={{ width: "100%" }} size={"s48"} variant={"primary"}>
            Арендовать
          </Button>
        </Link>
      </div>
      <span className={styles.upper__subtitle}>Two2Buddy</span>
    </div>
  );
}
