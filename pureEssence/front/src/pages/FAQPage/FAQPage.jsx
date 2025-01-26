import Breadcrumb2 from "../../components/common/Breadcrumb/Breadcrumb2";
import FAQSection from "../../components/common/FAQSection/FAQSection";

const FAQPage = () => {
  return (
    <>
      <Breadcrumb2 next="About Us" title="About Us" maxWidth="1600px" />
      <FAQSection />
    </>
  );
};

export default FAQPage;
