import styled from "styled-components";
import Shine from "../../components/utils/Animations/shineAnimation";

const switchScreen = "780px";

export const BlogSimpleMainContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: var(--spacing-xl);
  max-width: 1200px;
  margin: auto;
  padding: var(--spacing-xl) var(--spacing-md);

  @media (max-width: ${switchScreen}) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const BlogSimpleCol1 = styled.div`
  grid-column: 1 / 2;
`;

export const BlogSimpleCol2 = styled.aside`
  grid-column: 2 / 3;
  position: sticky;
  top: var(--spacing-xxl);

  @media (max-width: ${switchScreen}) {
    display: none;
  }
`;

export const BlogSimpleItem = styled.article`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--light-grey-color);
  padding-bottom: var(--spacing-lg);
  gap: var(--spacing-md);
  margin-bottom: 1.5rem;
`;

export const BlogSimpleImageContainer = styled(Shine)`
  width: 100%;
  padding-top: 56.25%;
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius-medium);
  box-shadow: var(--shadow-small);
`;

export const BlogSimpleImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-quick);
`;

export const BlogSimpleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

export const BlogSimpleTitle = styled.h2`
  font-size: var(--font-size-h4);
  color: var(--primary-color-dark-2);
  transition: color var(--transition-quick);

  &:hover {
    color: var(--primary-color);
  }
`;

export const BlogSimpleMeta = styled.div`
  font-size: var(--font-size-small);
  color: var(--grey-color);
`;

export const BlogSimpleDescription = styled.p`
  font-size: var(--font-size-body);
  color: var(--text-color-dark);
  line-height: 1.6;
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
