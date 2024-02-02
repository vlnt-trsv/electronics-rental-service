import { Outlet, useNavigate } from "react-router-dom";
import styles from "./DevicesInfo.module.scss";
// import Breadcrumbs from "@/components/ui/breadcrumb/Breadcrumb.tsx";
import { Button } from "@/components/ui/button";

const DevicesInfo = () => {
  const navigate = useNavigate();
  const back = (
    <Button size="sm" onClick={() => navigate(-1)}>
      Назад
    </Button>
  );

  return (
    <div className={styles.devices}>
      <span className={styles.devices__title}>Девайсы {back}</span>
      {/* <Breadcrumbs /> */}
      <Outlet />
    </div>
  );
};

export default DevicesInfo;
