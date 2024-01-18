import styles from "./MiddleSection.module.scss";
import AboutUsInfo from "./aboutUsInfo/AboutUsInfo";
import CategoriesInfo from "./categoriesInfo/CategoriesInfo";
import ContactUsInfo from "./contactUsInfo/ContactUsInfo";

const MiddleSection = () => {
  return (
    <div className={`${styles.middle} container`}>
        <CategoriesInfo />
        <AboutUsInfo />
        <ContactUsInfo />
    </div>
  );
};

export default MiddleSection;
