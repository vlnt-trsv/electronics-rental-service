import { Outlet, useNavigate } from "react-router-dom";
import styles from "./Devices.module.scss";
// import Breadcrumbs from "@/components/ui/breadcrumb/Breadcrumb.tsx";
import { Button } from "@/shared/ui/button/button";

export default function Devices() {
  const navigate = useNavigate();
  const back = (
    <Button size="sm" onClick={() => navigate(-1)}>
      Назад
    </Button>
  );

  return (
    // <DataCheckingContainer>
      <div className={styles.devices}>
        <span className={styles.devices__title}>Девайсы</span> 
        {/* <Breadcrumbs /> */}
        <Outlet />
      </div>
  );
};


