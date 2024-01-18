import FaqInfo from "./faqInfo/FaqInfo.jsx";
import FooterInfo from "./footerInfo/FooterInfo.jsx";
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
