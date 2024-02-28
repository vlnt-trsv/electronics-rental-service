import styles from "./_Header.module.scss";

import whiteLogo from "@/assets/imgs/white-logo.svg";

const _Header = () => {
  return (
    <div className={`${styles.header}`}>
      <div className={styles.header__logo}>
        {/* <img src={whiteLogo} alt="logo" /> */}
        <span className={styles.header__logo__span}>two2buddy</span>
      </div>
      <div className={styles.header__user}>
        <img src="" alt="user" />
      </div>
    </div>
  )
}

export default _Header