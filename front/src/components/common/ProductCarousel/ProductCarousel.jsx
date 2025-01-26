import { useSelector } from "react-redux";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Section, SvgBtnContainer } from "./ProductCarousel.styles";
import Heading from "../../utils/Heading/heading";
import { FaArrowRight } from "react-icons/fa";
import { CircularButton } from "../Carousels/CarouselTopProducts/CarouselTopProducts.styles";
import Row from "../../utils/Row/Row";
import ProductCard from "../ProductCard/ProductCard";
const ProductCarousel = ({
  title = "Selection of Featured Products",
  initialNum = 5,
  paddingY = "3rem",
}) => {
  const allProducts = useSelector((state) => state.products.products);
  return (
    <Section $paddingY={paddingY}>
      {title && (
        <Heading as="h2" $marginBottom="4.5rem">
          {title}
        </Heading>
      )}
      <Splide
        hasTrack={false}
        options={{
          type: "slide",
          perPage: initialNum,
          perMove: 1,
          gap: "2rem",
          autoplay: true,
          interval: 3000,
          pauseOnHover: true,
          pagination: false,
          arrows: 2,
          lazyLoad: true,
          breakpoints: {
            1200: {
              perPage: initialNum === 1 ? initialNum : 4,
            },
            768: {
              perPage: initialNum === 1 ? initialNum : 3,
            },
            576: {
              perPage: initialNum === 1 ? initialNum : 2,
            },
          },
        }}
      >
        <SplideTrack>
          {allProducts.map((product) => (
            <SplideSlide key={product.id}>
              <ProductCard product={product} />
            </SplideSlide>
          ))}
        </SplideTrack>
        {/* Custom arrows */}
        <div className="splide__arrows">
          <Row
            type="horizontal"
            $justifyContent="center"
            $alignItems="center"
            $flexGap="1rem"
          >
            <CircularButton className="splide__arrow splide__arrow--prev">
              <SvgBtnContainer className="-left-3 top-1/2 grid place-items-center h-7 w-7 rounded-full drop-shadow rotate-180">
                <FaArrowRight />
              </SvgBtnContainer>
            </CircularButton>
            <CircularButton className="splide__arrow splide__arrow--next">
              <SvgBtnContainer className="-right-3 top-1/2 grid place-items-center h-7 w-7 rounded-full drop-shadow">
                <FaArrowRight />
              </SvgBtnContainer>
            </CircularButton>
          </Row>
        </div>
      </Splide>
    </Section>
  );
};

export default ProductCarousel;
