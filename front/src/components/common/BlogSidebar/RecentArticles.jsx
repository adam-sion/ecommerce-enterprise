import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/generalFunctions";
import { useSelector } from "react-redux";

const RecentArticlesWrapper = styled.section`
  max-width: var(--max-width-screen);
  margin: 0 auto;
  padding: var(--spacing-lg);
  background-color: var(--background-color-light);
  border-radius: var(--border-radius-large);
  box-shadow: var(--box-shadow-lg);
`;

export const SidebarSectionTitle = styled.h2`
  font-size: var(--font-size-h5);
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  color: var(--primary-color-dark-2);
  text-align: center;
  border-bottom: 1px solid var(--primary-color-dark-2);
`;

const RecentArticlesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
`;

const RecentArticleItem = styled.li`
  display: flex;
  align-items: flex-start;
  border-radius: var(--border-radius-medium);
  background-color: var(--background-color-white);
  box-shadow: var(--box-shadow-sm);
  transition: box-shadow var(--transition-quick);

  &:hover {
    box-shadow: var(--box-shadow-lg);
  }
`;

const RecentArticleImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: var(--border-radius-small);
  margin-right: var(--spacing-md);
  object-fit: cover;
  flex-shrink: 0;
  border: 3px solid var(--primary-color-light);
`;

const RecentArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RecentArticleTag = styled.span`
  display: inline-block;
  background-color: var(--secondary-color-light);
  color: var(--secondary-color-dark);
  font-weight: 500;
  font-size: var(--font-size-small);
  padding: 0.3rem 1rem;
  border-radius: 20px;
  margin-bottom: var(--spacing-sm);
  text-transform: uppercase;
  max-width: fit-content;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const RecentArticleTitle = styled.h3`
  font-size: var(--font-size-body);
  font-weight: 600;
  color: var(--primary-color-dark-3);
  margin: 0 0 var(--spacing-xs);

  a {
    color: inherit;
    text-decoration: none;
    transition: color var(--transition-quick);

    &:hover {
      color: var(--primary-color-dark-1);
      text-decoration: underline;
    }
  }
`;

const RecentArticleDate = styled.time`
  font-size: var(--font-size-small);
  color: var(--gray-color-dark);
`;

const RecentArticles = () => {
  const articles = useSelector((state) => state.blog.articles);
  const sortedArticles = articles
    .slice()
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  const recentArticles = sortedArticles.slice(0, 3);
  return (
    <RecentArticlesWrapper>
      <SidebarSectionTitle>Recent Articles</SidebarSectionTitle>
      <RecentArticlesList>
        {recentArticles.map((article) => (
          <RecentArticleItem key={article.id}>
            <RecentArticleImage src={`/${article.image}`} alt={article.title} />
            <RecentArticleContent>
              <RecentArticleTag>{article.category}</RecentArticleTag>
              <RecentArticleTitle>
                <Link to={`/blog/${article.slug}`}>{article.title}</Link>
              </RecentArticleTitle>
              <RecentArticleDate>
                {formatDate(article.created_at)}
              </RecentArticleDate>
            </RecentArticleContent>
          </RecentArticleItem>
        ))}
      </RecentArticlesList>
    </RecentArticlesWrapper>
  );
};

export default RecentArticles;
