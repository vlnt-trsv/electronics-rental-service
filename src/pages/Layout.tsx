import Footer from "@/components/mainPage/footer/Footer.tsx";
import Header from "@/components/mainPage/header/Header.tsx";
import MiddleSection from "@/components/mainPage/middleSection/MiddleSection.tsx";
import UpperSection from "@/components/mainPage/upperSection/UpperSection.tsx";
// import Background from "@/components/ui/anim/background";

const Layout = () => {
  return (
    <>
      {/* <Background /> */}
      <Header />
      <UpperSection />
      <MiddleSection />
      <Footer />
    </>
  );
};

export default Layout;
