import { Button } from "@/shared/ui/button/button";
import styles from "./UpperSection.module.scss";
import { Link } from "react-router-dom";
import { LOGO } from "@/shared/assets";

export default function UpperSection() {
  const width = window.innerWidth;

  return (
    <div className={styles.upper}>
      <div className={styles.upper__cta}>
        <span className={styles.upper__title}>
          Арендуйте на срок, который вам нужен
        </span>
        {width < 430 && (
          <Link to="/accountPage/devices">
            <Button style={{ width: "100%" }} size="s48" variant="primary">
              Арендовать
            </Button>
          </Link>
        )}
      </div>
      <img className={styles.upper__logo} src={LOGO} alt="T2B Logo" />
    </div>
  );
}
