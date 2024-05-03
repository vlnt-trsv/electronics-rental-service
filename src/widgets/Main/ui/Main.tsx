import { Outlet, useLocation } from "react-router-dom";
import styles from "./Main.module.scss";
import { Greeting } from "@/features";
import getPageTitle from "../lib/utils/getPageTitle/getPageTitle";

export default function Main() {
  const location = useLocation();
  const showProfileInfo = location.pathname.startsWith("/accountPage/");

  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <div className={styles.main__title}>
          {getPageTitle(location.pathname)}
        </div>
        {/* <div className={styles.main__sblock}>Filter Section - INDEV</div> */}
      </div>
      <div className={styles.main__wrapper}>
        {showProfileInfo ? <Outlet /> : <Greeting />}
      </div>
    </div>
  );
}
