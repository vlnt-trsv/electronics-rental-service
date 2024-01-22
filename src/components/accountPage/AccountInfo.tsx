import Header from "./_header/_Header";
import Aside from "./_asidePanel/_Aside";
import Main from "./_main/_Main";

import styles from "./AccountInfo.module.scss";

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
    </div>
  );
};

export default AccountInfo;
