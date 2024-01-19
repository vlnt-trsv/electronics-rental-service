import FaqInfo from "./faqInfo/FaqInfo.js";
import FooterInfo from "./footerInfo/FooterInfo.js";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <FaqInfo />
      <FooterInfo />
    </div>
  );
};

export default Footer;
