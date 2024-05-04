import {
  HeaderMain,
  FooterMain,
  UpperSection,
  AboutUs,
  CTA,
  CategoryMain,
  ContactUs,
  Steps,
  MainFAQ,
} from "@/widgets/index";

export default function Main() {
  return (
    <>
      <HeaderMain />
      <UpperSection />
      <div className="container">
        <CategoryMain />
        <AboutUs />
        <CTA />
        <ContactUs />
        <Steps />
        <MainFAQ />
        <FooterMain />
      </div>
    </>
  );
}
