import Header from "./_header/_Header";
import Aside from "./_asidePanel/_Aside";
import Main from "./_main/_Main";
import { ToastContainer, Slide } from "react-toastify";
import styles from "./AccountInfo.module.scss";
import "react-toastify/dist/ReactToastify.min.css";

const AccountInfo = () => {
  return (
    <div className={`${styles.account} grid-container`}>
      <header className={`${styles.account__header} grid-header`}>
        <Header />
      </header>
      <aside className={`${styles.account__aside} grid-aside`}>
        <Aside />
      </aside>
      <main className={`${styles.account__main} grid-main`}>
        <Main />
      </main>
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

export default AccountInfo;
