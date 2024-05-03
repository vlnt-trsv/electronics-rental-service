import { Outlet, useLocation, useParams } from "react-router-dom";
import styles from "./Main.module.scss";
import { Greeting } from "@/features";
import getPageTitle from "../lib/utils/getPageTitle/getPageTitle";

export default function Main() {
  const location = useLocation();
  const params = useParams();
  const showProfileInfo = location.pathname.startsWith("/accountPage/");

  console.log("@", location.pathname)
  console.log("@", params)

  return (
    <div className={styles.main}>
      <div className={styles.main__title}>
        {getPageTitle(location.pathname, params)}
      </div>
      <hr />
      <div className={styles.main__wrapper}>
        {showProfileInfo ? <Outlet /> : <Greeting />}
      </div>
    </div>
  );
}
