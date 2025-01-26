import styled from "styled-components";
import Shine from "../../components/utils/Animations/shineAnimation";

const changeFormat = "1120px";

export const BlogListMainContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: var(--spacing-lg);
  max-width: var(--max-width-screen);
  margin: auto;
  padding-top: var(--spacing-xl);
  width: 95%;
  @media (max-width: 1360px) {
    column-gap: var(--spacing-md);
    justify-content: center;
  }

  @media (max-width: ${changeFormat}) {
    grid-template-columns: 1fr;
    justify-items: center;
    width: 90%;
  }
`;

export const BlogListItem = styled.article`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-md);
  column-gap: 2.5rem;
  padding: var(--spacing-lg) 0;
  border-bottom: 1px solid var(--light-grey-color);
  @media (max-width: ${changeFormat}) {
    grid-template-columns: 1fr;
  }
`;

export const BlogListImageContainer = styled(Shine)`
  position: relative;
  width: 100%;
  padding-top: 75%;
  overflow: hidden;
  border-radius: var(--border-radius-medium);
  box-shadow: var(--shadow-small);

  @media (max-width: ${changeFormat}) {
    padding-top: 56.25%;
  }
`;

export const BlogListImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-quick);
`;

export const BlogListContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  @media (max-width: 740px) {
    gap: 0.8rem;
  }
`;

export const BlogListItemTitle = styled.h2`
  font-size: var(--font-size-h4);
  color: var(--primary-color-dark-2);
  transition: color var(--transition-quick);

  &:hover {
    color: var(--primary-color);
  }

  @media (max-width: ${changeFormat}) {
    font-size: var(--font-size-h4);
  }
`;

export const BlogListMeta = styled.div`
  font-size: var(--font-size-small);
  color: var(--grey-color);
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
`;

export const BlogListDate = styled.time``;

export const BlogListAuthor = styled.span`
  cursor: pointer;
  margin-left: var(--spacing-sm);
  &:hover {
    color: var(--primary-color);
  }
`;

export const BlogListCategory = styled.span`
  cursor: pointer;
  margin-left: var(--spacing-sm);
  &:hover {
    color: var(--primary-color);
  }
`;

export const BlogListDescription = styled.p`
  font-size: var(--font-size-body);
  line-height: 1.6;
  color: var(--text-color-dark);

  @media (max-width: ${changeFormat}) {
    font-size: var(--font-size-small);
  }
`;

export const BlogListCol1 = styled.section`
  grid-column: 1 / 2;
`;

export const BlogListCol2 = styled.aside`
  grid-column: 2 / 3;
  position: sticky;
  top: var(--spacing-xxl);

  @media (max-width: ${changeFormat}) {
    display: none;
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
  @media (max-width: ${changeFormat}) {
    display: block;
  }
`;
export const SidbarContainer = styled.div`
  margin: 3rem auto;
`;
