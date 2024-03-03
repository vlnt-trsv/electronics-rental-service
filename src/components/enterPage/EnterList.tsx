import styles from "./EnterList.module.scss";
import whiteLogo from "@/assets/imgs/white-logo.svg";
// import blackLogo from "@/assets/imgs/white-logo.svg";
import { Outlet } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";

const EnterList = () => {
  return (
    <div className={styles.enter}>
      <div className={`${styles.enter__wrapper} container`}>
        <img className={styles.enter__logo} src={whiteLogo} alt="Лого" />
        <Outlet />
        <p className={styles.enter__copyright}>2023 © All rights reserved.</p>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        limit={5}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        stacked
        pauseOnFocusLoss
        draggable="touch"
        // closeButton={false}
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </div>
  );
};

export default EnterList;
