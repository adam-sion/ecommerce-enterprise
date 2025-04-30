import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTag,
  FaTwitter,
} from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Breadcrumb2 from "../../components/common/Breadcrumb/Breadcrumb2";
import BlogSidebar from "../../components/common/BlogSidebar/BlogSidebar";
import ContactFormComment from "./ContactFormComment";
import Shine from "../../components/utils/Animations/shineAnimation";
import Sidebar from "../../components/common/Sidebar/Sidebar";
import { RiSidebarFoldFill } from "react-icons/ri";
import Image from '../../components/common/Image/Image';

// Styled Components
const switchScreen = "1100px"; // Screen size to hide the sidebar

const BlogDetailPageContainer = styled.div`
  display: flex;
  margin: var(--spacing-lg) auto;
  max-width: var(--max-width-screen);
`;

const Col1 = styled.div`
  flex: 1;
`;

const Col2 = styled.div`
  flex: 0.25;
  padding-left: var(--spacing-lg);
  @media (max-width: ${switchScreen}) {
    display: none;
  }
`;

const MainContent = styled.div`
  width: 100%;
  padding: 0 var(--spacing-xl);
  margin: auto;
  @media (max-width: 1020px) {
    width: 90%;
    padding: 0;
  }
`;

const Header = styled.header`
  margin-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--light-grey-color);
  padding-bottom: var(--spacing-md);
`;

const Title = styled.h1`
  font-size: var(--font-size-h2);
  color: var(--text-color);
  margin-bottom: var(--spacing-sm);
`;

const Meta = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  color: var(--grey-color);
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Date = styled.span`
  color: var(--grey-color);
`;

const Social = styled.div`
  margin-top: var(--spacing-md);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);

  .social-icon {
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--text-color);
    transition: color var(--transition-quick);
    &:hover {
      color: var(--primary-color-dark-1);
    }
  }
`;

const ImageContainer = styled(Shine)`
  max-width: 600px;
  max-height: 400px;
  margin: var(--spacing-xxl) auto;
  overflow: hidden;
  border-radius: var(--border-radius-medium);

  img {
    width: 100%;
    height: 100%;
    margin-bottom: var(--spacing-lg);
    transition: transform var(--transition-quick);
  }
  @media (max-width: 740px) {
    margin: var(--spacing-md) auto;
  }
  @media (max-width: 430px) {
    margin: 0;
  }
`;

const Body = styled.section`
  font-size: var(--font-size-body);
  line-height: 1.8;

  p {
    margin-bottom: var(--spacing-md);
  }
`;

const Quote = styled.blockquote`
  margin: var(--spacing-lg) 0;
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--primary-color-light-7);
  border-left: 4px solid var(--accent-color);
  font-style: italic;
`;

const Subtitle = styled.h2`
  font-size: var(--font-size-h3);
  margin-top: var(--spacing-lg);
  color: var(--text-color);
`;

const ImageGallery = styled(Shine)`
  display: flex;
  gap: var(--spacing-sm);
  justify-content: space-between;
  margin: var(--spacing-lg) 0;

  img {
    width: calc(100% / 3);
    height: auto;
    object-fit: cover;
    border-radius: var(--border-radius-medium);
    transition: transform var(--transition-quick);
  }
`;

const SubSubtitle = styled.h3`
  font-size: var(--font-size-h4);
  margin-top: var(--spacing-md);
  color: var(--text-color);
`;

const Tags = styled.div`
  margin-top: var(--spacing-lg);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--light-grey-color);

  span {
    font-size: var(--font-size-body);
    font-weight: 600;
  }
`;

const TagList = styled.ul`
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-sm);
`;

const TagItem = styled.li`
  cursor: pointer;
  background-color: var(--light-grey-color);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--border-radius-small);
  font-size: var(--font-size-body);
  color: var(--text-color);
  transition: background-color var(--transition-quick);

  &:hover {
    background-color: var(--primary-color-light-1);
  }
`;

const Footer = styled.footer`
  margin-top: var(--spacing-xl);
  border-top: 1px solid var(--light-grey-color);
  padding-top: var(--spacing-lg);
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
`;

const Bio = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  h3 {
    font-size: var(--font-size-h4);
    margin-bottom: var(--spacing-xs);
    color: var(--text-color);
  }

  p {
    color: var(--grey-color-dark-2);
    font-size: var(--font-size-body);
    line-height: 1.5;
  }
`;

const BlogNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacing-lg);
`;

const Prev = styled.div`
  button {
    background: none;
    border: none;
    color: var(--text-color-light);
    font-size: var(--font-size-body);
    cursor: not-allowed;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Next = styled.div`
  button {
    background: none;
    border: none;
    color: var(--text-color-light);
    font-size: var(--font-size-body);
    cursor: not-allowed;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const SidebarSwitch = styled.div`
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
export const SidbarContainer = styled.div`
  margin: 3rem auto;
`;

const BlogDetailPage = () => {
  const {
    selectedArticle: article,
    previousArticle,
    nextArticle,
  } = useLoaderData();

  const navigate = useNavigate();

  const handleTagClick = (tag) => {
    navigate(`/blog-grid-layout?tag=${encodeURIComponent(tag)}`);
  };

  return (
    <>
      <Breadcrumb2 next="Blog Page" title="Blog Page" maxWidth="1600px" />
      <BlogDetailPageContainer>
        {/* BLog content  */}
        <Col1>
          <MainContent>
            <article>
              <Header>
                <Title>{article.title}</Title>
                <Meta>
                  <StyledLink
                    to={`/blog-grid-layout?author=${encodeURIComponent(
                      article.author
                    )}`}
                  >
                    {article.author}
                  </StyledLink>
                  <Date>{article.created_at}</Date>
                </Meta>
                <Social>
                  <span>Share:</span>
                  <FaFacebookF className="social-icon" />
                  <FaTwitter className="social-icon" />
                  <FaInstagram className="social-icon" />
                  <FaPinterest className="social-icon" />
                </Social>
              </Header>
              <ImageContainer>
                <Image src={`/${article.image}`} alt="Natural beauty product" width="600" height="600" objectFit="cover" />
              </ImageContainer>
              <Body>
                <p>{article.body}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus lacinia odio vitae vestibulum vestibulum. Cras
                  vehicula lacus at felis ultricies, non lacinia elit auctor.
                  Nulla facilisi. Phasellus non dolor at mauris tempor aliquam.
                </p>
                <Quote>
                  "Natural beauty is about enhancing what you have. Let yourself
                  shine through!" - Anonymous
                </Quote>
                <Subtitle>Top Natural Beauty Trends</Subtitle>
                <p>This season, several trends have stood out:</p>
                <ImageGallery>
                  <Image src={`/${article.image}`} alt="Trend 1" width="100%" height="100%" objectFit="cover" />
                  <Image src={`/${article.image}`} alt="Trend 2" width="100%" height="100%" objectFit="cover" />
                  <Image src={`/${article.image}`} alt="Trend 3" width="100%" height="100%" objectFit="cover" />
                </ImageGallery>
                <p>
                  Each of these trends emphasizes the importance of natural
                  ingredients and sustainable practices.
                </p>
                <SubSubtitle>Herbal Skincare</SubSubtitle>
                <p>
                  Herbal skincare products are gaining popularity for their
                  gentle yet effective properties, providing a natural glow.
                </p>
                <SubSubtitle>Eco-Friendly Packaging</SubSubtitle>
                <p>
                  Sustainable packaging is not just a trend but a necessary
                  shift towards reducing waste and preserving our planet.
                </p>
                <SubSubtitle>Organic Makeup</SubSubtitle>
                <p>
                  Organic makeup products are free from harmful chemicals,
                  ensuring a natural look without compromising your health.
                </p>
              </Body>
              <Tags>
                <FaTag className="tags__icon" />
                <span>Tags:</span>
                <TagList>
                  {article.keywords.map((tag, index) => (
                    <TagItem key={index} onClick={() => handleTagClick(tag)}>
                      {tag}
                    </TagItem>
                  ))}
                </TagList>
              </Tags>
              <Footer>
                <AuthorInfo>
                  <Bio>
                    <Image src="/people/7.jpg" alt="Author" width={50} height={50} objectFit="cover" borderRadius={25} />
                    <StyledLink
                      to={`/blog-grid-layout?author=${encodeURIComponent(
                        article.author
                      )}`}
                    >
                      <h3>{article.author}</h3>
                    </StyledLink>
                    <p>
                      I am a natural beauty enthusiast and blogger with over 10
                      years of experience in the industry. I love to write about
                      the latest trends and share tips on how to enhance your
                      natural beauty. My mission is to inspire others to embrace
                      their true selves.
                    </p>
                  </Bio>
                </AuthorInfo>
              </Footer>
            </article>
            <BlogNavigation>
              <Prev className={!previousArticle ? "disabled" : ""}>
                {previousArticle ? (
                  <StyledLink
                    to={`/blog/${previousArticle.slug}`}
                    title={previousArticle.title}
                  >
                    &laquo; Previous
                  </StyledLink>
                ) : (
                  <button disabled>&laquo; Previous</button>
                )}
              </Prev>
              <Next className={!nextArticle ? "disabled" : ""}>
                {nextArticle ? (
                  <StyledLink
                    to={`/blog/${nextArticle.slug}`}
                    title={nextArticle.title}
                  >
                    Next &raquo;
                  </StyledLink>
                ) : (
                  <button disabled>Next &raquo;</button>
                )}
              </Next>
            </BlogNavigation>
          </MainContent>
          <ContactFormComment />
        </Col1>
        {/* Sidebar content for Big Screen */}
        <Col2>
          <BlogSidebar />
        </Col2>
      </BlogDetailPageContainer>
      {/* Sidebar content for Small Screen */}
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
    </>
  );
};

export default BlogDetailPage;
