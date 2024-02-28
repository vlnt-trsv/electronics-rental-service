import { Outlet, useLocation } from "react-router-dom";
import styles from "./_Main.module.scss";
import GreetingInfo from "./greetingInfo/GreetingInfo";

const _Main = () => {
  const location = useLocation();
  const showProfileInfo = location.pathname.startsWith("/accountPage/");
  return (
    <div className={styles.main}>
      {showProfileInfo ? <Outlet /> : <GreetingInfo />}
    </div>
  );
};

export default _Main;
