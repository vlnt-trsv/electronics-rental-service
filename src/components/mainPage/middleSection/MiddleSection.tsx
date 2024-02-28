import StepsInfo from "../stepsInfo/StepsInfo";
import styles from "./MiddleSection.module.scss";
import AboutUsInfo from "./aboutUsInfo/AboutUsInfo";
import CategoriesInfo from "./categoriesInfo/CategoriesInfo";
import ContactUsInfo from "./contactUsInfo/ContactUsInfo";
import CtaInfo from "./ctaInfo/CtaInfo";
import FaqInfo from "./faqInfo/FaqInfo";

const MiddleSection = () => {
  return (
    <div className={`${styles.middle} container`}>
      <CategoriesInfo />
      <AboutUsInfo />
      <StepsInfo />
      <CtaInfo />
      <ContactUsInfo />
      <FaqInfo />
    </div>
  );
};

export default MiddleSection;
