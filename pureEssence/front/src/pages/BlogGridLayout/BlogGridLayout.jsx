import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { LiaCommentSolid } from "react-icons/lia";
import ShareSocialIconforBlog from "../../components/utils/ShareSocialIconforBlog/ShareSocialIconforBlog";
import { CustomLink } from "../../components/utils/Button/CustomLink";
import Breadcrumb2 from "../../components/common/Breadcrumb/Breadcrumb2";
import Shine from "../../components/utils/Animations/shineAnimation";
import BlogSidebar from "../../components/common/BlogSidebar/BlogSidebar";
import { RiSidebarFoldFill } from "react-icons/ri";
import Sidebar from "../../components/common/Sidebar/Sidebar";
const switchScreen = "1400px";

const BlogGrid = styled.main`
  background-color: var(--background-color);
  color: var(--text-color);
  padding: var(--spacing-lg) 0;
  max-width: 1600px;
  margin: auto;
`;
const Container = styled.div`
  max-width: 95%;
  margin: auto;
`;
const SectionBlog = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  gap: var(--spacing-xl);
  justify-content: space-between;
  margin: 3rem auto;

  @media (max-width: ${switchScreen}) {
    justify-content: center; /* Center content when Col2 disappears */
  }
`;

const Col1 = styled.div`
  flex: 0 0 75%;

  @media (max-width: ${switchScreen}) {
    flex: 0 0 100%; /* Take full width when Col2 disappears */
  }
`;

const Col2 = styled.div`
  flex: 0 1 22%;

  @media (max-width: ${switchScreen}) {
    display: none; /* Control when Col2 disappears */
  }
`;

const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
`;

const Article = styled.article`
  background: var(--primary-color-light-8);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--shadow-medium);
  overflow: hidden;
  max-width: 100%;
  min-width: 20rem;
`;

const ImageContainer = styled(Shine)`
  position: relative;
`;

const Category = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-small);
  border-radius: var(--border-radius-small);
  background-color: color-mix(
    in srgb,
    var(--primary-color-dark-1) 75%,
    transparent
  );
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  font-weight: ${({ $isBold }) => ($isBold ? "bold" : "normal")};
`;

const Content = styled.div`
  padding: var(--spacing-md);
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--font-size-small);
  color: var(--grey-color);
  margin-bottom: var(--spacing-sm);
  justify-content: space-between;
`;

const Author = styled.span`
  cursor: pointer;
  font-weight: ${({ $isBold }) => ($isBold ? "bold" : "normal")};
`;

const DateSpan = styled.span`
  cursor: pointer;
`;

const Comments = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
`;

const CommentsIconContainer = styled.div`
  position: relative;
`;

const CommentsIcon = styled(LiaCommentSolid)`
  margin-right: var(--spacing-xs);
  font-size: var(--font-size-h3);
`;

const CommentsCount = styled.span`
  position: absolute;
  top: -5px;
  right: 0;
  background-color: var(--primary-color);
  color: var(--primary-color-dark-5);
  border-radius: 50%;
  padding: 0.6rem;
  width: var(--font-size-body);
  height: var(--font-size-body);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-small);
`;

const Separator = styled.span`
  margin: 0 var(--spacing-xs);
`;

const ItemTitle = styled.h2`
  font-size: var(--font-size-h6);
  margin: var(--spacing-sm) 0;
  color: var(--text-color);
`;

const SidebarSwitch = styled.div`
  position: fixed;
  top: 50%;
  right: 0;
  display: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 10;
  svg {
    color: var(--primary-color);
    font-size: var(--font-size-h1);
  }
  @media (max-width: ${switchScreen}) {
    display: block;
  }
`;

const SidbarContainer = styled.div`
  margin: 3rem auto;
`;

const BlogGridLayout = () => {
  const articles = useSelector((state) => state.blog.articles);
  const [searchParams] = useSearchParams();
  const author = searchParams.get("author");
  const category = searchParams.get("category");
  const navigate = useNavigate();

  const handleFilterByCategory = (articleCategory) => {
    if (articleCategory !== null) {
      navigate(
        `/blog-grid-layout?category=${encodeURIComponent(articleCategory)}`
      );
    }
    if (category === articleCategory) {
      navigate(`/blog-grid-layout`);
    }
  };

  const handleFilterByAuthor = (articleAuthor) => {
    navigate(`/blog-grid-layout?author=${encodeURIComponent(articleAuthor)}`);
    if (author === articleAuthor) {
      navigate(`/blog-grid-layout`);
    }
  };

  if (!articles) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Breadcrumb2 next="Blog Grid" title="Blog Grid" maxWidth="1600px" />
      <BlogGrid>
        <Container>
          <SectionBlog>
            <Col1>
              <ArticleContainer className="blog-grid__items">
                {articles.map((article) => (
                  <Article key={article.id} className="blog-grid__item">
                    <ImageContainer>
                      <Link to={`/blog/${article.slug}`}>
                        <img src={`/${article.image}`} alt="Blog" />
                      </Link>
                      <ShareSocialIconforBlog id={article.id} />
                      <Category
                        $isBold={category === article.category}
                        onClick={() => handleFilterByCategory(article.category)}
                      >
                        {article.category}
                      </Category>
                    </ImageContainer>

                    <Content className="blog-grid__content">
                      <Meta className="blog-grid__meta">
                        <Author
                          $isBold={author}
                          onClick={() => handleFilterByAuthor(article.author)}
                        >
                          by{" "}
                          <span className="blog-grid__author-text">
                            {article.author}
                          </span>
                        </Author>
                        <Separator className="blog-grid__separator">
                          on
                        </Separator>
                        <DateSpan className="blog-grid__date">
                          {new Date(article.created_at).toLocaleDateString(
                            "en-US",
                            { year: "numeric", month: "long", day: "numeric" }
                          )}
                        </DateSpan>
                        <Comments
                          to={`/blog/${article.slug}#comments-section`}
                          className="blog-grid__comments"
                        >
                          <CommentsIconContainer>
                            <CommentsIcon />
                            <CommentsCount className="blog-grid__comments-count">
                              4
                            </CommentsCount>
                          </CommentsIconContainer>
                        </Comments>
                      </Meta>
                      <Link to={`/blog/${article.slug}`}>
                        <ItemTitle className="blog-grid__item-title">
                          {article.title}
                        </ItemTitle>
                      </Link>

                      <CustomLink
                        $color="var(--accent-color)"
                        $underlineColor="var(--accent-color)"
                      >
                        <Link to={`/blog/${article.slug}`}>READ MORE</Link>
                      </CustomLink>
                    </Content>
                  </Article>
                ))}
              </ArticleContainer>
            </Col1>
            <Col2 className="blog-list__col2 multi-carousel">
              {/* Sidebar or additional components can go here */}
              <BlogSidebar />
            </Col2>
          </SectionBlog>
        </Container>
        <Sidebar.Provider>
          <Sidebar.Trigger opens="blogSidebar" position="right">
            <SidebarSwitch>
              <RiSidebarFoldFill />
            </SidebarSwitch>
          </Sidebar.Trigger>
          <Sidebar.Content name="blogSidebar">
            <SidbarContainer>
              <BlogSidebar />
            </SidbarContainer>
          </Sidebar.Content>
        </Sidebar.Provider>
      </BlogGrid>
    </>
  );
};

export default BlogGridLayout;
