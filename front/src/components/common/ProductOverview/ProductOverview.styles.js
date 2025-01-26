import styled from "styled-components";
import { scaleUp } from "../../utils/Animations/animations";
import Row from "../../utils/Row/Row";
import { CustomLink } from "../../utils/Button/CustomLink";

export const MainContent = styled.main`
  width: 100%;
  padding: 20px;
`;

export const ColumnSelectorBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--background-primary-transparent);
  border-bottom: 2px solid var(--primary-color-dark-4);
  margin-bottom: var(--spacing-md);
  box-shadow: var(--shadow-medium);
  border-radius: 15px;
  svg {
    width: var(--font-size-h4); /* Increased icon size */
    height: var(--font-size-h4); /* Increased icon size */
  }
  .icon {
    margin: 0 var(--spacing-sm);
    cursor: pointer;
    color: var(--primary-color-dark-4);
    transition:
      color var(--transition-normal),
      background-color var(--transition-normal),
      transform var(--transition-normal),
      box-shadow var(--transition-normal);

    padding: var(--spacing-xs);
    border-radius: var(--border-radius-medium);
    background-color: var(--background-color);

    &:hover {
      color: var(--background-color);
      color: var(--primary-color-dark-4);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      transform: scale(1.1);
    }

    &.active {
      color: var(--background-color);
      background-color: var(--primary-color-dark-2);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      transform: scale(1.2);
    }
  }
  @media (max-width: 1080px) {
    border-radius: 0px;
  }
  @media (max-width: 720px) {
    .fa-th {
      display: none;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$columns}, 1fr);
  gap: 20px;
  transition: all 0.5s ease;
  /* For ProductCardList change two columns to one column for smaller than 1540px */
  @media (max-width: 1540px) {
    grid-template-columns: ${(props) =>
      props.$isListView && props.$columns === 2
        ? "1fr"
        : `repeat(${props.$columns}, 1fr)`};
  }
  & > * {
    animation: ${scaleUp} 0.5s ease;
  }
`;
//

export const BarHeader = styled.div`
  display: none;
  padding: var(--spacing-sm) var(--spacing-md);

  @media (max-width: 720px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-sm);
    margin: auto;
    gap: 0.5rem;
  }
`;
export const BtnContainer = styled.div`
  display: block;
`;
export const ResultsSummary = styled.div`
  font-size: var(--font-size-body);
  color: var(--text-color);
  font-weight: 500;
  display: flex;
`;
export const ContentInner = styled.div`
  display: block;
  @media (max-width: 720px) {
    display: none !important;
  }
`;
export const FilterContainer = styled.div`
  display: none;

  @media (max-width: 1080px) {
    display: block;
  }
`;
export const LoadMoreButton = styled.button`
  margin: 2rem auto;
  padding: 0.8rem 2rem;
  background-color: var(--primary-color);
  color: black;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  display: block;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  text-align: center;

  &:hover {
    background-color: red;
    transform: translateY(-3px);
  }

  &:active {
    background-color: white;
    transform: translateY(1px);
  }
`;
// Product Footer Part
export const ProgressBarWrapper = styled.div`
  background-color: var(--primary-color-light-5);
  border-radius: var(--border-radius-large);
  overflow: hidden;
  height: 1.25rem;
  width: 50%;
  margin: 0 auto;
  position: relative;
`;

export const Progress = styled.div`
  background: linear-gradient(
    90deg,
    var(--primary-color-dark-1) 0%,
    var(--primary-color-dark-3) 100%
  );
  height: 100%;
  width: ${(props) => props.$width}%;
  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: inherit;
  position: relative;
`;

export const ShowMoreText = styled(CustomLink)`
  margin-top: var(--spacing-sm);
`;

export const ResultsSummaryText = styled.div`
  margin-bottom: var(--spacing-xs);
  font-family: var(--font-secondary);
  font-size: var(--font-size-body);
  color: var(--primary-color-dark-3);
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  padding: var(--spacing-sm);
  text-align: center;
`;

export const ProductFooter = styled(Row)`
  max-width: 35rem;
  margin: 1rem auto;
`;
