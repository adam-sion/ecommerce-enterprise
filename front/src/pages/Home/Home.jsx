import Hero from "../../components/common/Hero/Hero";
import BeautyFeatures from "../../components/common/BeautyFeatures/BeautyFeatures";
import FAQSection from "../../components/common/FAQSection/FAQSection";
import Testimonial from "../../components/common/TestimonialSection/TestimonialSection";
import Categories from "../../components/common/Categories/Categories";
import AuroraSection from "../../components/common/AuroraSection/AuroraSection";
import CarouselTopProducts from "../../components/common/Carousels/CarouselTopProducts/CarouselTopProducts";
import OrganicSection from "../../components/common/OrganicSection/OrganicSection";
import CarouselTopProductsByCat from "../../components/common/Carousels/CarouselTopProductsByCat/CarouselTopProductsByCat";
import ProductCarousel from "../../components/common/ProductCarousel/ProductCarousel";
import ScrollToTopBtn from "../../components/utils/ScrollToTopBtn/ScrollToTopBtn";
import BlogSection from "../../components/common/BlogSection/BlogSection";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <AuroraSection />
      <ProductCarousel />
      <BeautyFeatures />
      <CarouselTopProducts />
      <OrganicSection />
      <CarouselTopProductsByCat />
      <FAQSection />
      <Testimonial />
      <BlogSection />
      <ScrollToTopBtn />
    </>
  );
};

export default Home;
