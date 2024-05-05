import { Outlet, useLocation } from "react-router-dom";
import styles from "./Main.module.scss";
import { Greeting } from "@/features";
import getPageTitle from "../lib/utils/getPageTitle/getPageTitle";
import Text from "@/widgets/Aside/ui/Text";

export default function Main() {
  const location = useLocation();
  const showProfileInfo = location.pathname.startsWith("/accountPage/");

  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Text size={24} weight={700} style={{ padding: "16px" }}>
          {getPageTitle(location.pathname)}
        </Text>
        {/* <div className={styles.main__sblock}>Filter Section - INDEV</div> */}
      </div>
      <div className={styles.main__wrapper}>
        {showProfileInfo ? <Outlet /> : <Greeting />}
      </div>
    </div>
  );
}
