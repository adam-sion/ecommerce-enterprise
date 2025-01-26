import styled from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";
import Breadcrumb2 from "../../components/common/Breadcrumb/Breadcrumb2";
import ShareSocialIconforBlog from "../../components/utils/ShareSocialIconforBlog/ShareSocialIconforBlog";
import { truncateDescription } from "../../components/utils/generalFunctions";
import { ShowMoreText } from "../../components/common/ProductOverview/ProductOverview.styles";
import Row from "../../components/utils/Row/Row";
import Shine from "../../components/utils/Animations/shineAnimation";
import { CustomLink } from "../../components/utils/Button/CustomLink";

const BlogMasonryWrapper = styled.div`
  padding: 1rem;
  background-color: #fff;
  color: black;
`;

const Container = styled.div`
  max-width: 70rem;
  margin: 5rem auto;
`;

const ItemContainer = styled.div`
  width: 17rem;
  position: relative;
  margin: 0 auto;
`;

const Item = styled.div`
  overflow: hidden;
  width: 15rem;
`;

const DateSpan = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 0.75rem;
  padding-right: 0.5rem;
  z-index: 1;

  &::before {
    content: "";
    right: 25px;
    top: 0;
    display: block;
    width: 1.5px;
    height: 3rem;
    background-color: rgb(197, 197, 197);
    position: absolute;
  }
`;

const ImageContainer = styled(Shine)`
  position: relative;
  z-index: 1;
  width: 15rem;
  height: 15rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const Body = styled.p`
  font-size: 1rem;
  color: #555;
`;

const LoadMoreContainer = styled(Row)`
  margin: 2rem auto;
`;
const ReadMoreContainer = styled.div`
  margin-top: 1rem;
`;
const BlogMasonry = () => {
  const articles = useSelector((state) => state.blog.articles);
  const [visibleArticles, setVisibleArticles] = useState(6);

  const loadMoreArticles = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 2);
  };

  return (
    <>
      <Breadcrumb2 next="Blog Masonry" title="Blog Masonry" maxWidth="1600px" />
      <BlogMasonryWrapper>
        <Container>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 580: 2, 900: 3 }}
          >
            <Masonry gutter="2.8rem">
              {articles.slice(0, visibleArticles).map((article) => (
                <ItemContainer key={article.id}>
                  <Item>
                    <DateSpan>
                      {new Date(article.created_at).toLocaleDateString(
                        "en-US",
                        {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </DateSpan>
                    <ImageContainer>
                      <Link to={`/blog/${article.slug}`}>
                        <div className="shine">
                          <Image
                            src={`/${article.image}`}
                            alt={article.title}
                          />
                        </div>
                      </Link>
                    </ImageContainer>
                    <ShareSocialIconforBlog id={article.id} />
                    <Link to={`/blog/${article.slug}`}>
                      {" "}
                      <Title>{article.title}</Title>
                    </Link>
                    <Body>{truncateDescription(article.body, 90)}</Body>
                    <ReadMoreContainer>
                      <CustomLink
                        $color="black"
                        $underlineColor="black"
                        $size="var(--font-size-small)"
                      >
                        <Link to={`/blog/${article.slug}`}>READ MORE</Link>
                      </CustomLink>
                    </ReadMoreContainer>
                  </Item>
                </ItemContainer>
              ))}
            </Masonry>
          </ResponsiveMasonry>
          {visibleArticles < articles.length && (
            <LoadMoreContainer $justifyContent="center" $alignItems="center">
              <ShowMoreText
                $color="var(--text-color)"
                $underlineColor="var(--text-color)"
                onClick={loadMoreArticles}
              >
                Show More
              </ShowMoreText>
            </LoadMoreContainer>
          )}
        </Container>
      </BlogMasonryWrapper>
    </>
  );
};

export default BlogMasonry;
