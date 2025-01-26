import styled from "styled-components";

export const FilterPanelWrapper = styled.div`
  padding: var(--spacing-sm);
`;

export const FilterPanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
`;

export const FilterPanelTitle = styled.h3`
  font-family: var(--font-primary);
  font-size: var(--font-size-h4);
  color: var(--text-color);
`;

export const FilterPanelContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;

  .price-input-container {
    display: flex;
    align-items: center;
    background-color: var(--background-color-light);
    border: 1px solid var(--light-grey-color);
    border-radius: var(--border-radius-medium);
    padding: var(--spacing-xs);
    transition: var(--transition-quick);

    &:focus-within {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 2px var(--primary-color-light-1);
    }

    .price-symbol {
      margin-right: var(--spacing-xs);
      color: var(--text-color);
      font-size: var(--font-size-body);
    }

    .price-input {
      width: 2rem;
      padding: 0;
      border: none;
      border-radius: 0;
      text-align: center;
      background: transparent;
      outline: none;
      color: var(--text-color-dark);
    }
  }

  .price-separator {
    margin: 0;
    color: var(--text-color);
    font-size: 1.2rem;
  }
`;

export const FilterReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: var(--background-color-light);
  transition: var(--transition-quick);

  input[type="checkbox"] {
    accent-color: var(--primary-color);
    width: 1.2rem;
    height: 1.2rem;
    margin-right: var(--spacing-xs);
    cursor: pointer;
    transition: var(--transition-quick);

    &:checked {
      transform: scale(1.1);
    }
  }

  .dress-card-grid__stars {
    display: flex;
    align-items: center;

    svg {
      color: var(--primary-color-dark-2);
      margin-right: var(--spacing-xxs);
      font-size: 1.4rem;
    }
  }

  label {
    font-family: var(--font-secondary);
    color: var(--text-color-dark);
    font-size: 1rem;
    cursor: pointer;
  }

  .reviews-label {
    font-family: var(--font-primary);
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-color);
    margin-right: var(--spacing-sm);
  }
`;

export const FilterSizeList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  li {
    margin-bottom: var(--spacing-sm);
  }
`;

export const SizeButton = styled.button`
  background-color: var(--primary-color-light-5);
  border: 1px solid var(--primary-color-light-4);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-small);
  cursor: pointer;
  font-size: var(--font-size-body);
  font-weight: 500;
  color: var(--text-color);
  transition: all var(--transition-quick);
  box-shadow: var(--box-shadow-sm);
  text-align: center;

  &:hover {
    background-color: var(--primary-color-light-1);
    border-color: var(--primary-color-light-1);
    transform: translateY(-0.8px);
    box-shadow: var(--box-shadow-lg);
  }

  &.selected {
    background-color: var(--primary-color-dark-2);
    color: var(--background-color);
    border-color: var(--primary-color);
    box-shadow: var(--box-shadow-sm);
    transform: none;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--primary-color-light-2);
  }
  .selected {
    background-color: var(--primary-color);
    color: white;
  }

  .inactive {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const FilterBrandList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const BrandLabel = styled.label`
  display: flex;
  align-items: center;
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-small);
  cursor: pointer;
  transition: all var(--transition-quick);
  width: 100%;
  font-size: var(--font-size-body);
  &:hover {
    background-color: var(--primary-color-light-7);
    border-color: var(--primary-color-light-1);
  }
`;

export const BrandCheckbox = styled.input`
  margin-right: var(--spacing-sm);
  cursor: pointer;
  accent-color: var(--primary-color);
`;

export const BrandName = styled.span`
  font-family: var(--font-secondary);
  font-weight: 500;
  color: var(--text-color);
  margin-right: var(--spacing-sm);
`;

export const BrandCount = styled.span`
  font-family: var(--font-secondary);
  font-weight: 400;
  color: var(--dark-grey-color);
  margin-left: auto;
`;
export const IconWrapper = styled.div`
  position: absolute;
  right: var(--spacing-sm);
  top: 50%;
  transform: translateY(-50%)
    rotate(${(props) => (props.isExpanded ? "180deg" : "0deg")});
  transition: transform 0.2s ease-in-out;
`;

export const IconContainer = styled.div`
  width: var(--font-size-h2);
  display: flex;
  justify-content: center;
  align-items: center;
`;
