import { useSelector } from "react-redux";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Heading from "../../utils/Heading/heading";
import RotatingText from "../../utils/RotatingText/RotatingText";
import Shine from "../../utils/Animations/shineAnimation";
import Row from "../../utils/Row/Row";
import { CircularButton } from "../Carousels/CarouselTopProducts/CarouselTopProducts.styles";
import { SvgBtnContainer } from "../ProductCarousel/ProductCarousel.styles";
import { FaArrowRight } from "react-icons/fa";

const HeaderContainer = styled.div`
  margin: 3rem auto;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
`;

const RotatingTextContainer = styled.div`
  display: block;
`;

const CarouselContainer = styled.div`
  margin: 2rem auto;
  max-width: 1440px;
  width: 95%;
`;

const ArticleCard = styled.div`
  position: relative;
  padding: 1rem;
  background: var(--background-primary-transparent);
  border-radius: var(--border-radius-large);
  box-shadow: var(--shadow-large);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
`;
const ImageContainer = styled(Shine)`
  display: block;
`;
const ArticleImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: var(--border-radius-medium);
  object-fit: cover;
  margin-bottom: 1rem;
  overflow: hidden;
`;

const ArticleTitle = styled.h3`
  font-size: var(--font-size-h4);
  margin-bottom: 0.5rem;
  color: var(--text-color);
`;

const ArticleAuthor = styled.p`
  font-size: var(--font-size-small);
  color: var(--grey-color);
  margin-bottom: 1rem;
`;

const CategoryLabel = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius-small);
  font-size: var(--font-size-small);
  color: var(--background-color);
  font-weight: bold;
`;

const ReadMoreButton = styled(Link)`
  margin-top: auto;
  align-self: flex-end;
  background: var(--primary-color);
  color: var(--background-color);
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-medium);
  cursor: pointer;
  transition: var(--transition-quick);

  &:hover {
    background: var(--accent-color);
  }

  svg {
    font-size: 1.5rem;
  }
`;
const DateLabel = styled.div`
  position: absolute;
  z-index: 1;
  top: 1.5rem; /* Adjust this value based on your layout */
  right: 1.5rem;
  background: #ffffff;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  color: #0c0c0c;

  span {
    font-size: 0.75rem;
    color: #757575; /* Grey for month text */
  }

  .day {
    font-size: 1.5rem;
    color: #0c0c0c; /* Dark color for day number */
    margin-bottom: -4px; /* Slight adjustment to align the date */
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
    height: 4px;
    background-color: #e91e63; /* Red top bar */
    border-radius: 2px;
  }
`;

const BlogSection = () => {
  const articles = useSelector((state) => state.blog.articles);

  return (
    <>
      <HeaderContainer>
        <Heading as="h2">News & Blog Updates</Heading>
        <RotatingTextContainer>
          <RotatingText
            textInput="LATEST NEWS - LATEST NEWS"
            textSize="1.6rem"
            linkTo="/blog-grid-layout"
          />
        </RotatingTextContainer>
      </HeaderContainer>

      <CarouselContainer>
        <Splide
          hasTrack={false}
          options={{
            type: "loop",
            perPage: 3,
            gap: "2rem",
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            pagination: false,
            arrows: true,
            breakpoints: {
              1200: { perPage: 2 },
              768: { perPage: 1 },
            },
          }}
        >
          <SplideTrack>
            {articles.map((article) => (
              <SplideSlide key={article.id}>
                <ArticleCard>
                  <CategoryLabel>{article.category}</CategoryLabel>
                  <DateLabel>
                    <div className="day">
                      {new Date(article.created_at).getDate()}
                    </div>
                    <span>
                      {new Date(article.created_at).toLocaleString("default", {
                        month: "short",
                      })}
                    </span>
                  </DateLabel>
                  <Link to={`/blog/${article.slug}`}>
                    <ImageContainer>
                      <ArticleImage src={article.image} alt={article.title} />
                    </ImageContainer>
                  </Link>

                  <Link to={`/blog/${article.slug}`}>
                    <ArticleTitle>{article.title}</ArticleTitle>
                  </Link>
                  <ArticleAuthor>By {article.author}</ArticleAuthor>
                  <CategoryLabel>By {article.author}</CategoryLabel>
                  <ReadMoreButton to={`/blog/${article.slug}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 2L22 12H13V22H11V12H2L12 2Z" />
                    </svg>
                  </ReadMoreButton>
                </ArticleCard>
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
      </CarouselContainer>
    </>
  );
};

export default BlogSection;
