import styled, { css } from "styled-components";
import { shrink, slideDown } from "../../utils/Animations/animations";

const firstChange = "890px";
const secondChange = "610px";
const transitionStyles = css`
  transition: all 0.3s ease-in-out;
`;
export const Nav = styled.nav`
  position: ${({ $isSticky }) => ($isSticky ? "fixed" : "relative")};
  background-color: var(--primary-color-light-9);
  color: var(--background-color);
  font-family: var(--font-primary);
  box-shadow: var(--shadow-large);
  width: 100%;
  top: 0;
  z-index: 999;
  box-shadow: ${({ isSticky }) =>
    isSticky ? "0 2px 5px rgba(0, 0, 0, 0.1)" : "none"};
  ${transitionStyles};
  animation: ${({ isSticky }) => (isSticky ? slideDown : "")} 0.3s ease-in-out;
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  max-width: var(--max-width-screen);
  margin: auto;
  padding: ${({ isSticky }) => (isSticky ? "0.5rem 2rem" : "1rem 2rem")};
  ${transitionStyles};
`;
export const NavSection = styled.div`
  display: flex;
  align-items: center;

  &.icon-wrapper {
    @media (max-width: ${secondChange}) {
      display: none;
    }
  }
`;
export const MobileMenuContainer = styled.div`
  display: none;
  @media (max-width: ${secondChange}) {
    display: block;
  }
`;
export const IconsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 2.5rem;
    animation: ${({ $isSticky }) => ($isSticky ? shrink : "")} 0.3s ease-in-out;
    ${transitionStyles};
    @media (max-width: 600px) {
      height: 2rem;
    }
  }
  a {
    display: flex;
  }
`;

export const IconButton = styled.button`
  position: relative;
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  padding: var(--spacing-xs);
  border-radius: var(--border-radius-medium);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem; /* Slightly smaller font size */

  &:active {
    transform: scale(0.9); /* Smaller scale on active */
  }
  svg {
    width: 1.8rem;
    transition: all var(--transition-quick);

    &:hover {
      fill: var(--primary-color-dark-1);
    }
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -0.2rem;
  right: -0.3rem;
  background-color: var(--accent-color);
  color: #fff;
  border-radius: 50%;
  padding: 0.2rem 0.4rem;
  font-size: 0.7rem;
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerLargeScreenMenu = styled.div`
  display: block;
  @media (max-width: ${firstChange}) {
    display: none;
  }
`;
export const ContainerSmallScreenMenu = styled.div`
  display: none;

  @media (max-width: ${firstChange}) {
    display: block;
  }
  svg {
    width: 2rem;
    height: 2rem;
    color: var(--accent-color);
  }
`;
