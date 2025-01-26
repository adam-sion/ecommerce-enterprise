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

const Categories = ({ title = true }) => {
  return (
    <Section>
      <Content>
        {title && (
          <>
            <Heading as="h2" $marginBottom="1.4rem">
              Explore Our Natural Beauty Products
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
            arrows: false, // Disable default arrows for larger screens
            pagination: false,
            drag: "free",
            snap: true,
          }}
        >
          <SplideTrack>
            <SplideSlide>
              <SlideCard>
                <Card className="skincare">
                  <StyledLink to="/product-category/skincare">
                    <Image src={skincare} alt="Skincare" />
                    <Name $colorText="white">Skincare</Name>
                  </StyledLink>
                </Card>
              </SlideCard>
            </SplideSlide>
            <SplideSlide>
              <SlideCard>
                <Card className="haircare">
                  <StyledLink to="/product-category/haircare">
                    <Image src={haircare} alt="Haircare" />
                    <Name $colorText="white">Haircare</Name>
                  </StyledLink>
                </Card>
              </SlideCard>
            </SplideSlide>
            <SplideSlide>
              <SlideCard>
                <Card className="makeup">
                  <StyledLink to="/product-category/makeup">
                    <Image src={makeup} alt="Makeup" />
                    <Name $colorText="white">Makeup</Name>
                  </StyledLink>
                </Card>
              </SlideCard>
            </SplideSlide>
            <SplideSlide>
              <SlideCard>
                <Card className="wellness">
                  <StyledLink to="/product-category/wellness">
                    <Image src={wellness} alt="Wellness" />
                    <Name $colorText="white">Wellness</Name>
                  </StyledLink>
                </Card>
              </SlideCard>
            </SplideSlide>
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
