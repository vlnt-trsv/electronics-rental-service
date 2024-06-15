import {
  HeaderMain,
  // FooterMain,
  UpperSection,
  // AboutUs,
  // CTA,
  // CategoryMain,
  // ContactUs,
  // Steps,
  // MainFAQ,
} from "@/widgets/index";

import styles from "./Main.module.scss";

export default function Main() {
  return (
    <div className={styles.overlay}>
      <HeaderMain />
      <UpperSection />
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "32px",
          opacity: "50%",
        }}
      >
        [РЕДИЗАЙН ЛЕНДИНГА]
      </h1>
      {/* <div className="container">
        <CategoryMain />
        <AboutUs />
        <CTA />
        <ContactUs />
        <Steps />
        <MainFAQ />
        <FooterMain />
      </div> */}
    </div>
  );
}
