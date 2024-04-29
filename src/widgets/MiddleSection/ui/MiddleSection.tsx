import StepsInfo from "@/components/mainPage/stepsInfo/StepsInfo";
import styles from "./MiddleSection.module.scss";
import AboutUsInfo from "@/components/mainPage/middleSection/aboutUsInfo/AboutUsInfo";
import CategoriesInfo from "@/components/mainPage/middleSection/categoriesInfo/CategoriesInfo";
import ContactUsInfo from "@/components/mainPage/middleSection/contactUsInfo/ContactUsInfo";
import CtaInfo from "@/components/mainPage/middleSection/ctaInfo/CtaInfo";
import FaqInfo from "@/components/mainPage/middleSection/faqInfo/FaqInfo";

export default function MiddleSection() {
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
}
