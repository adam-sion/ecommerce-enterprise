import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { MenuItem, Dropdown } from "./DropdownMenu";

// Rotate arrow animation
const arrowRotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

// Styled components
const Nav = styled.nav`
  padding: var(--spacing-md) var(--spacing-lg);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: var(--spacing-lg);
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  color: var(--text-color);
  font-family: var(--font-secondary);
  font-size: var(--font-size-body);
  display: flex;
  align-items: center;
  text-decoration: none;
  transition:
    color var(--transition-quick),
    transform var(--transition-quick);

  &:hover {
    color: var(--primary-color);
  }
`;

const IconWrapper = styled.div`
  margin-left: var(--spacing-xs);
  display: flex;
  align-items: center;
  transition: transform var(--transition-quick);
  will-change: transform;

  ${NavItem}:hover & {
    animation: ${arrowRotate} var(--transition-quick) ease-in-out;
  }
`;

// Modified Component
const DropdownColumnContainer = styled.div`
  margin-right: var(--spacing-lg);
  display: flex;
  flex-direction: column; /* Ensures items stack vertically */
  width: 100%; /* Ensures the container takes full width */
  &:last-child {
    margin-right: 0;
  }
`;

const DropdownItem = styled(Link)`
  display: inline-block;
  padding: 0.2rem;
  margin: var(--spacing-sm) 0;
  color: var(--text-color); /* Default text color */
  font-family: var(--font-secondary);
  font-size: var(--font-size-small);
  text-decoration: none;
  position: relative;
  background: linear-gradient(
    to left,
    var(--text-color) 50%,
    var(--primary-color) 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  background-clip: text; /* Clip the background to the text */
  -webkit-background-clip: text; /* For WebKit browsers */
  transition:
    background-position 0.8s ease-in-out,
    color 0.8s ease-in-out;

  &:hover {
    background-position: 0%;
    color: var(--primary-color-dark-1); /* Change text color on hover */
    text-shadow: 0 1px 2px var(--shadow-color);
  }
`;

// Usage example
const MenuNavigationLargeSC = () => {
  return (
    <Nav aria-label="Main navigation">
      <NavList>
        <NavLink to="/">Home</NavLink>
        <MenuItem
          label={
            <NavLink to="#">
              Shop
              <IconWrapper>
                <FaChevronDown />
              </IconWrapper>
            </NavLink>
          }
        >
          <Dropdown minWidth={"30rem"}>
            <DropdownColumnContainer>
              <DropdownItem to="/all-products">Shop Standard</DropdownItem>
              <DropdownItem to="/list-shop">Shop List</DropdownItem>
              <DropdownItem to="/cart-summary">Shopping cart</DropdownItem>
            </DropdownColumnContainer>
            <DropdownColumnContainer>
              <DropdownItem to="/shop-left-sidebar">Left Sidebar</DropdownItem>
              <DropdownItem to="/shop-right-sidebar">
                Right Sidebar
              </DropdownItem>
              <DropdownItem to="/full-width">Full Width</DropdownItem>
            </DropdownColumnContainer>
            <DropdownColumnContainer>
              <DropdownItem to="/breadcrumb-1">Breadcrumb 1</DropdownItem>
              <DropdownItem to="/breadcrumb-2">Breadcrumb 2</DropdownItem>
            </DropdownColumnContainer>
          </Dropdown>
        </MenuItem>

        <MenuItem
          minWidth={"45rem"}
          label={
            <NavLink to="#">
              Page
              <IconWrapper>
                <FaChevronDown />
              </IconWrapper>
            </NavLink>
          }
        >
          <Dropdown minWidth={"8rem"}>
            <DropdownColumnContainer>
              <DropdownItem to="about-us">About Us</DropdownItem>
              <DropdownItem to="faq">FAQ</DropdownItem>
              <DropdownItem to="/not-found/404">Error 404</DropdownItem>
            </DropdownColumnContainer>
          </Dropdown>
        </MenuItem>

        <MenuItem
          minWidth={"45rem"}
          label={
            <NavLink to="#">
              Blog
              <IconWrapper>
                <FaChevronDown />
              </IconWrapper>
            </NavLink>
          }
        >
          <Dropdown minWidth={"12rem"}>
            <DropdownColumnContainer>
              <DropdownItem to="/blog-grid-layout">Grid Layout</DropdownItem>
              <DropdownItem to="/blog-masonry">Masonry Layout</DropdownItem>
              <DropdownItem to="/blog-list">Blog List</DropdownItem>
              <DropdownItem to="/blog-simple">Blog Simple</DropdownItem>
            </DropdownColumnContainer>
          </Dropdown>
        </MenuItem>
        <NavLink to="/contact">Contact</NavLink>
      </NavList>
    </Nav>
  );
};

export default MenuNavigationLargeSC;
