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
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser, verifyRegister } from "../../features/auth/authSlice";
import { showToast } from "../../features/toast/toastSlice";

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const queryParams = new URLSearchParams(location.search);
      const token = queryParams.get("register-token");

      if (token) {
        const result = await dispatch(verifyRegister(token));

        if (result.meta.requestStatus === "fulfilled") {
          navigate("/");
          dispatch(showToast({ type: "success", message: "Sign up success!" }));
        } else {
          navigate("/");
          dispatch(showToast({ type: "error", message: "Sign up failed" }));
        }
      }
    };

    verifyToken();
   
  }, [dispatch, location]);

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
