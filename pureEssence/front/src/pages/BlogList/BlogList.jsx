import {
  BlogListItem,
  BlogListImageContainer,
  BlogListImage,
  BlogListContent,
  BlogListItemTitle,
  BlogListMeta,
  BlogListDate,
  BlogListAuthor,
  BlogListCategory,
  BlogListDescription,
  BlogListMainContainer,
  BlogListCol1,
  BlogListCol2,
  SidebarSwitch,
  SidbarContainer,
} from "./BlogList.styles";
import Breadcrumb2 from "../../components/common/Breadcrumb/Breadcrumb2";
import { Link } from "react-router-dom";
import ShareSocialIconforBlog from "../../components/utils/ShareSocialIconforBlog/ShareSocialIconforBlog";
import { truncateDescription } from "../../components/utils/generalFunctions";
import { useSelector } from "react-redux";
import BlogSidebar from "../../components/common/BlogSidebar/BlogSidebar";
import { CustomLink } from "../../components/utils/Button/CustomLink";
import Row from "../../components/utils/Row/Row";
import Sidebar from "../../components/common/Sidebar/Sidebar";
import { RiSidebarFoldFill } from "react-icons/ri";

const BlogList = () => {
  const articles = useSelector((state) => state.blog.articles);

  return (
    <>
      <Breadcrumb2 next="Blog List" title="Blog List" maxWidth="1600px" />
      <BlogListMainContainer>
        <BlogListCol1 as="section">
          {articles.map((article) => (
            <BlogListItem key={article.id} as="article">
              <BlogListImageContainer>
                <Link to={`/blog/${article.slug}`}>
                  <BlogListImage
                    src={`/${article.image}`}
                    alt={`${article.title} image`}
                  />
                </Link>
                <ShareSocialIconforBlog id={article.id} />
              </BlogListImageContainer>
              <BlogListContent>
                <Link to={`/blog/${article.slug}`}>
                  <BlogListItemTitle as="h2">{article.title}</BlogListItemTitle>
                </Link>
                <BlogListMeta>
                  <BlogListDate>
                    {new Date(article.created_at).toDateString()}
                  </BlogListDate>
                  <BlogListAuthor>{article.author}</BlogListAuthor>
                  <BlogListCategory>{article.category}</BlogListCategory>
                </BlogListMeta>
                <BlogListDescription>
                  {truncateDescription(article.body, 350)}
                </BlogListDescription>
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
              </BlogListContent>
            </BlogListItem>
          ))}
        </BlogListCol1>
        <BlogListCol2 as="aside">
          <BlogSidebar />
        </BlogListCol2>
      </BlogListMainContainer>
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

export default BlogList;
