import {
  BlogSimpleMainContainer,
  BlogSimpleCol1,
  BlogSimpleCol2,
  BlogSimpleItem,
  BlogSimpleImageContainer,
  BlogSimpleImage,
  BlogSimpleContent,
  BlogSimpleTitle,
  BlogSimpleMeta,
  BlogSimpleDescription,
  SidebarSwitch,
  SidbarContainer,
} from "./BlogSimple.styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BlogSidebar from "../../components/common/BlogSidebar/BlogSidebar";
import { truncateDescription } from "../../components/utils/generalFunctions";
import { CustomLink } from "../../components/utils/Button/CustomLink";
import Row from "../../components/utils/Row/Row";
import Breadcrumb2 from "../../components/common/Breadcrumb/Breadcrumb2";
import Sidebar from "../../components/common/Sidebar/Sidebar";
import { RiSidebarFoldFill } from "react-icons/ri";

const BlogSimple = () => {
  const articles = useSelector((state) => state.blog.articles);

  return (
    <>
      <Breadcrumb2 next="Blog List" title="Blog List" maxWidth="1600px" />

      <BlogSimpleMainContainer>
        <BlogSimpleCol1>
          {articles.map((article) => (
            <BlogSimpleItem key={article.id}>
              <BlogSimpleImageContainer>
                <Link to={`/blog/${article.slug}`}>
                  <BlogSimpleImage
                    src={`/${article.image}`}
                    alt={`${article.title} image`}
                  />
                </Link>
              </BlogSimpleImageContainer>
              <BlogSimpleContent>
                <Link to={`/blog/${article.slug}`}>
                  <BlogSimpleTitle>{article.title}</BlogSimpleTitle>
                </Link>
                <BlogSimpleMeta>
                  <span>{new Date(article.created_at).toDateString()}</span> |{" "}
                  <span>{article.author}</span>
                </BlogSimpleMeta>
                <BlogSimpleDescription>
                  {truncateDescription(article.body, 150)}
                </BlogSimpleDescription>

                <Row
                  type="horizontal"
                  $justifyContent="flex-start"
                  $alignItems="flex-start"
                >
                  <CustomLink
                    $color="var(--primary-color-dark-2)"
                    $underlineColor="var(--primary-color-dark-2)"
                  >
                    <Link to={`/blog/${article.slug}`}>READ MORE</Link>
                  </CustomLink>
                </Row>
              </BlogSimpleContent>
            </BlogSimpleItem>
          ))}
        </BlogSimpleCol1>
        <BlogSimpleCol2>
          <BlogSidebar />
        </BlogSimpleCol2>
      </BlogSimpleMainContainer>
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

export default BlogSimple;
