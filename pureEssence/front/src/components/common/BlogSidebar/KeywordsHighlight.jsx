import styled from "styled-components";
import { useSelector } from "react-redux";
import { SidebarSectionTitle } from "./RecentArticles";

// Styled Components
const Container = styled.div`
  margin-top: 1.5rem;
`;

const KeywordsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) 0;
  justify-content: center;
  /* max-width: 260px; */
  margin: auto;
`;

const KeywordItem = styled.span`
  background-color: var(--primary-color-light-7);
  color: var(--text-color);
  font-family: var(--font-secondary);
  font-size: var(--font-size-small);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-small);
  cursor: pointer;
  transition:
    color var(--transition-quick),
    background-color var(--transition-quick);
  border: 1px solid var(--primary-color);

  &:hover {
    background-color: var(--primary-color-dark-1);
    color: var(--background-color);
  }
`;

const KeywordsHighlight = () => {
  const articles = useSelector((state) => state.blog.articles);

  // Extract unique keywords from articles and limit to 8
  const keywords = Array.from(
    new Set(articles.flatMap((article) => article.keywords))
  ).slice(0, 8); // Get unique keywords and limit to 8

  return (
    <>
      <Container>
        <SidebarSectionTitle>KEYWORDS</SidebarSectionTitle>
        <KeywordsContainer>
          {keywords.map((keyword, index) => (
            <KeywordItem key={index}>{keyword}</KeywordItem>
          ))}
        </KeywordsContainer>
      </Container>
    </>
  );
};

export default KeywordsHighlight;
