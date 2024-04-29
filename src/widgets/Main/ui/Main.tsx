import { Outlet, useLocation } from "react-router-dom";
import styles from "./Main.module.scss";
import { Greeting } from "@/widgets/Greeting";

export default function Main() {
  const location = useLocation();
  const showProfileInfo = location.pathname.startsWith("/accountPage/");

  return (
    <div className={styles.main}>
      {showProfileInfo ? <Outlet /> : <Greeting />}
    </div>
  );
}
