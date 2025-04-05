import skincare from "../../../assets/img/categories/hydrating-face-cream-1.png";
import haircare from "../../../assets/img/categories/moisturizing-conditioner-1.png";
import makeup from "../../../assets/img/categories/hydrating-concealer.png";
import wellness from "../../../assets/img/categories/wellness.png";
import Heading from "../../utils/Heading/heading";
import { FaArrowRight } from "react-icons/fa";
import {
  Card,
  Content,
  Section,
  StyledLink,
  Image,
  Name,
  CarouselWrapper,
  SlideCard,
} from "./Categories.styles";
import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Row from "../../utils/Row/Row"; // Ensure Row is correctly imported
import { CircularButton } from "../Carousels/CarouselTopProducts/CarouselTopProducts.styles";
import { SvgBtnContainer } from "../ProductCarousel/ProductCarousel.styles";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Categories = ({ title = true }) => {
  const {categories} = useSelector((state)=> state.category);

  return (
    <Section>
      <Content>
        {title && (
          <>
            <Heading as="h2" $marginBottom="1.4rem">
              Explore Our Natural Handmade Products
            </Heading>
            <Heading as="h4">Discover a variety of our products</Heading>
          </>
        )}
        <CarouselWrapper
          hasTrack={false} // Necessary for custom arrows
          options={{
            perPage: 4,
            breakpoints: {
              1500: {
                perPage: 3,
                arrows: true, // Show arrows on screens below 1500px width
              },
              1180: {
                perPage: 2,
                arrows: true, // Show arrows on screens below 1180px width
              },
              680: {
                perPage: 1,
                arrows: true, // Show arrows on screens below 680px width
              },
            },
            gap: "1rem",
            arrows: true, // Disable default arrows for larger screens
            pagination: false,
            drag: "free",
            snap: true,
          }}
        >
           <SplideTrack>
            {
              categories.map((category)=> (
                <SplideSlide key={category.id}>
              <SlideCard>
                <Card className={category.name}>
                  <StyledLink to={`/product-category/${category.name}`}>
                    <Image src={category.image} alt={category.name} />
                    <Name $colorText="white">{category.name}</Name>
                  </StyledLink>
                </Card>
              </SlideCard>
            </SplideSlide>
              ))
            }
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
        </CarouselWrapper>
      </Content>
    </Section>
  );
};

export default Categories;
