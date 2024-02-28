import FooterInfo from "./footerInfo/FooterInfo.js";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <FooterInfo />
    </div>
  );
};

export default Footer;
