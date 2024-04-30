import styles from "./Enter.module.scss";
import { EnterForm } from "@/widgets";
import whiteLogo from "@/shared/assets/imgs/white-logo.svg";
// import blackLogo from "@/assets/imgs/white-logo.svg";
import { ToastContainer, Slide } from "react-toastify";

export default function Enter() {
  return (
    <div className={styles.enter}>
      <div className={`${styles.enter__wrapper} container`}>
        <img className={styles.enter__logo} src={whiteLogo} alt="Лого" />
        <EnterForm />
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
}
