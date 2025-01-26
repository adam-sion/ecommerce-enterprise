import styled from "styled-components";
import { useSelector } from "react-redux";
import { CiLocationArrow1 } from "react-icons/ci";
import { SidebarSectionTitle } from "./RecentArticles";

// Styled Components
const CategoriesBlogContainer = styled.div`
  padding: var(--spacing-md);
  background-color: var(--background-color);
  border-radius: var(--border-radius-medium);
  margin: 0 auto; /* Center horizontally */
  text-align: left;
`;

const CategoriesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const CategoryItem = styled.li`
  cursor: pointer;
  padding: var(--spacing-xs) 0;
  display: inline-block; /* Ensures underline is only as wide as the content */
  font-family: var(--font-secondary);
  font-weight: ${(props) => (props.$bold ? "bold" : "normal")};
  color: var(--grey-color);
  transition:
    color var(--transition-quick),
    transform var(--transition-quick);
  position: relative;

  &:hover {
    color: var(--accent-color);
    transform: translateX(5px); /* Subtle slide effect */
  }

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--accent-color);
    transition: width var(--transition-quick);
  }

  &:hover:before {
    width: 100%;
  }
`;

const CategoryIcon = styled(CiLocationArrow1)`
  margin-right: var(--spacing-xs);
  color: var(--primary-color);
  transition: transform var(--transition-quick);

  ${CategoryItem}:hover & {
    transform: rotate(15deg);
  }
`;

const CategoriesBlog = ({ selectedCategory, handleClick }) => {
  const articles = useSelector((state) => state.blog.articles);

  // Extract unique categories from articles
  const categoryCounts = articles.reduce((counts, article) => {
    counts[article.category] = (counts[article.category] || 0) + 1;
    return counts;
  }, {});

  return (
    <CategoriesBlogContainer>
      <SidebarSectionTitle>CATEGORIES</SidebarSectionTitle>
      <CategoriesList>
        <CategoryItem
          $bold={!selectedCategory}
          onClick={() => handleClick(null)}
        >
          <CategoryIcon />
          All Categories ({articles.length})
        </CategoryItem>
        {Object.keys(categoryCounts).map((category) => (
          <CategoryItem
            key={category}
            $bold={selectedCategory === category}
            onClick={() => handleClick(category)}
          >
            <CategoryIcon />
            {category} ({categoryCounts[category]})
          </CategoryItem>
        ))}
      </CategoriesList>
    </CategoriesBlogContainer>
  );
};

export default CategoriesBlog;
