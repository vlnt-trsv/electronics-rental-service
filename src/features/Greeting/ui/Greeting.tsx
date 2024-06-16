import Cookies from "js-cookie";
import styles from "./Greeting.module.scss";
import { Link } from "react-router-dom";
import { useGetUserByIdQuery } from "@/shared/api/api";
import { Button } from "@/shared/ui/button/button";

export default function Greeting() {
  const userId = JSON.parse(Cookies.get("connect.user") || "");
  const { data: userData } = useGetUserByIdQuery(userId._id);

  return (
    <div className={styles.greeting}>
      <span className={styles.greeting__title}>
        Привет, {userData?.user?.firstName || "гость"}!
      </span>
      <span className={styles.greeting__description}>
        Теперь вы можете управлять своей арендой через личный кабинет
      </span>
      <span className={styles.greeting__description}>
        Для начала заполните личный данные
      </span>
      <Link to={"/accountPage/personalDataInfo"}>
        <Button variant="primary" size={"lg"}>
          Персональные данные
        </Button>
      </Link>
    </div>
  );
}
