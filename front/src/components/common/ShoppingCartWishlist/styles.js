import styled from "styled-components";
import { slideInFromRight } from "../../utils/Animations/animations";

export const Container = styled.div`
  max-width: var(--max-width-screen);
  margin: 0 auto;
  padding: var(--spacing-md) var(--spacing-lg);
  font-family: var(--font-primary);
  background-color: var(--background-color);
  border-radius: var(--border-radius-large);
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-md);
  border-bottom: 1px solid var(--light-grey-color);
  gap: var(--spacing-lg);
  position: relative;
`;

export const ItemsCardContainer = styled.div`
  position: relative;
`;

export const BadgeWrapper = styled.div`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
`;

export const TabWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const TabButton = styled.button`
  background: none;
  border: none;
  font-family: var(--font-secondary);
  font-size: var(--font-size-body-sm);
  ${(props) =>
    props.$active
      ? "color: var(--primary-color-dark-5); font-weight:700; background-color:var(--background-primary-transparent-2); border-radius:25px 25px 0 0"
      : "color: var(--disabled-color)"};
  padding: var(--spacing-sm) var(--spacing-md);
  cursor: pointer;
  border-bottom: ${(props) =>
    props.$active ? "2px solid var(--primary-color)" : "none"};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const TabContent = styled.div`
  display: ${(props) => (props.$active ? "block" : "none")};
  padding: ${(props) => (props.$active ? "var(--spacing-md) 0" : "0")};
`;

// Wrapper for the whole section
export const WrapperFooter = styled.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: solid 1px var(--light-grey-color);
`;

// Subtotal section
export const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
  font-family: var(--font-secondary);
  font-size: var(--font-size-h5);

  span:first-child {
    font-weight: bold;
  }

  span:last-child {
    font-weight: bold;
    color: var(--text-color);
  }
`;

// Support Information
export const Support = styled.div`
  font-size: var(--font-size-small);
  font-family: var(--font-secondary);
  color: var(--dark-grey-color);
  line-height: 1.6;
  margin-top: 2rem;
  .support-item {
    display: flex;
    align-items: center;
    margin-bottom: var(--spacing-xs);
    gap: 0.4rem;
    color: var(--dark-grey-color);

    svg {
      margin-right: var(--spacing-xs);
      color: var(--primary-color-dark-1);
    }
  }
`;
// ItemCard Styles
export const CartItem = styled.div`
  margin-bottom: 0.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--light-grey-color);

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemContainer = styled.article`
  display: flex;
  position: relative;
  align-items: center;
  column-gap: 1.1rem;
  animation: ${slideInFromRight} var(--transition-quick);
  ${(props) => (!props.$cardShop ? "padding-top: .5rem" : "")}
`;
export const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0rem;
`;
export const ItemImageWrapper = styled.div`
  flex-shrink: 0;
  width: 110px;
  height: 110px;
  overflow: hidden;
  border-radius: var(--border-radius-medium);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-quick);

  &:hover {
    transform: scale(1.08);
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 2;
  min-width: 0;
`;

export const ItemInfo = styled.div`
  margin-bottom: var(--spacing-md);
`;

export const ItemName = styled.h3`
  font-family: var(--font-primary);
  font-size: var(--font-size-body);
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: var(--spacing-sm);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.4s ease-in-out;
  &:hover {
    color: var(--primary-color-dark-4);
  }
`;

export const ControlContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
export const NoItemsMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #999; // Set your desired color
  font-size: 18px; // Adjust font size
  padding: 20px; // Add padding if needed
  svg {
    width: 10rem;
    fill: #999;
    margin-bottom: 1rem;
  }
  p {
    text-align: center;
  }
`;
export const Price = styled.span`
  font-size: var(--font-size-h6);
`;
