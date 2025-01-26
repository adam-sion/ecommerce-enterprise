import styled, { css } from "styled-components";
import {
  hoverAnimation,
  moveInFromLeft,
  moveOutLeft,
  slideInFromRight,
  slideOutToRight,
} from "../../utils/Animations/animations";
import Heading from "../../utils/Heading/heading";
export const ProductCardContainer = styled.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s;
  border-radius: 1rem;
  margin-bottom: 1rem;
  border: 0.5px solid rgba(255, 183, 195, 0.3);
  box-shadow: 0 0 20px rgba(255, 183, 195, 0.7);
  position: relative;
  button {
    margin: 0.4rem auto 1.2rem;
  }
`;

const sizeBurst = "var(--font-size-h3)";

export const Burst = styled.div`
  background: transparent;
  width: ${sizeBurst};
  height: ${sizeBurst};
  position: absolute;
  text-align: center;
  color: white;
  z-index: 5;
  margin: 0 auto;
  top: 0.85rem;
  left: 0.85rem;

  span {
    position: relative;
    z-index: 10;
    left: 0;
    right: 0;
    margin: 0 auto;
    font-size: var(--font-size-h5);
    height: ${sizeBurst};
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--font-tertiary);
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: ${sizeBurst};
    width: ${sizeBurst};
    background: var(--primary-color-dark-1);
    z-index: 2;
  }

  &:before {
    transform: rotate(30deg);
  }

  &:after {
    transform: rotate(60deg);
  }
`;

// Container to maintain the layout and height
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

// Wrapper to position images absolutely within the container
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
`;

// Styles for the main product image
export const ProductImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: none; /* Disable transition to avoid conflicts with animation */
  opacity: ${({ $isHovered }) => ($isHovered ? 0 : 1)};
  transform: ${({ $isHovered }) =>
    $isHovered ? "translateX(-100%)" : "translateX(0)"};
  ${({ $isHovered }) =>
    $isHovered &&
    css`
      animation: ${moveOutLeft} 0.6s forwards;
    `}
  ${({ $isExiting }) =>
    $isExiting &&
    css`
      animation: ${moveInFromLeft} 0.6s forwards;
    `}
`;

export const ThumbnailImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: none; /* Disable transition to avoid conflicts with animation */
  opacity: ${({ $isHovered }) => ($isHovered ? 1 : 0)};
  transform: ${({ $isHovered }) =>
    $isHovered ? "translateX(0)" : "translateX(100%)"};
  ${({ $isHovered }) =>
    $isHovered &&
    css`
      animation: ${slideInFromRight} 0.6s forwards;
    `}
  ${({ $isExiting }) =>
    $isExiting &&
    css`
      animation: ${slideOutToRight} 0.6s forwards;
    `}
`;

export const IconItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 50%;
  padding: 8px;
  box-shadow: var(--shadow-medium);
  cursor: pointer;
  ${hoverAnimation};

  svg {
    color: var(--primary-color-dark-2);
    font-size: var(--font-size-h5);
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: box-shadow 0.3s ease-in-out;
`;
export const PreviewContainer = styled.div`
  background-color: var(--primary-color-dark-1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  /* height: 3.2rem; */
  margin-bottom: 0.75rem;
`;

export const StarsWrapper = styled.div`
  margin-bottom: 0.25rem;
  svg {
    color: var(--primary-color-dark-1);
    font-size: var(--font-size-h6);
  }
`;
export const ProductName = styled(Heading).attrs({ as: "h6" })`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 100;
  color: black;
  width: 80%;
  margin: auto;
  margin-bottom: 0.25rem;
  transition: color 0.4s ease-in-out;
  &:hover {
    color: var(--primary-color-dark-4);
  }
`;
export const PriceContainer = styled.div`
  margin-bottom: 0.5rem;
`;

export const Category = styled.p`
  font-size: var(--font-size-h4);
  font-family: var(--font-tertiary);
  font-weight: bold;
  letter-spacing: 1.1px;
  color: white;
  /* margin: 0.5rem 0; */
  /* padding: 0.25rem 0; */
  text-transform: capitalize;
  border-bottom: 1px solid var(--primary-color);
  background-color: var(--primary-color-dark-1);
  display: flex;
  justify-content: center;
  align-items: center;
`;
