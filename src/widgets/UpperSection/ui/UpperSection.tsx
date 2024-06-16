import styles from "./UpperSection.module.scss";
import { LOGO } from "@/shared/assets";

export default function UpperSection() {
  return (
    <div className={styles.upper}>
      <div className={styles.upper__cta}>
        <span className={styles.upper__title}>
          Арендуйте на срок, который вам нужен
        </span>
      </div>
      <img className={styles.upper__logo} src={LOGO} alt="T2B Logo" />
    </div>
  );
}
