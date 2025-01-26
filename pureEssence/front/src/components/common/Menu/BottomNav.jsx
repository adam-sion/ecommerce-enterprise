import styled from "styled-components";
import Search from "../../../assets/icons/search.svg?react";
import Heart from "../../../assets/icons/heart.svg?react";
import User from "../../../assets/icons/user.svg?react";
import Shop from "../../../assets/icons/shop.svg?react";
import Sidebar from "../Sidebar/Sidebar";
import LoginRegister from "../LoginRegister/LoginRegister";
import ShoppingCartWishlist from "../ShoppingCartWishlist/ShoppingCartWishlist";

const BottomNavWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.7)
  );
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-around;
  padding: var(--spacing-sm) 0;
  box-shadow: var(--shadow-large);
  z-index: var(--zindex-dropdown);
`;

const IconButton = styled.button`
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition:
    transform var(--transition-quick),
    color var(--transition-quick),
    box-shadow var(--transition-quick);

  svg {
    width: 32px;
    height: 32px;
    margin-bottom: var(--spacing-xs);
  }

  & > span {
    font-family: var(--font-secondary);
    font-size: var(--font-size-body);
    color: black;
    font-weight: 600;
  }
`;

const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: var(--accent-color);
  color: white !important;
  border-radius: 50%;
  padding: 0.2rem 0.4rem;
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 1;
  min-width: 20px;
  text-align: center;
  box-sizing: border-box;
`;

const BottomNav = ({ wishList, totalQty, handleSearchToggle }) => {
  return (
    <BottomNavWrapper>
      <Sidebar.Provider>
        <Sidebar.Trigger opens="mySidebar" position="right">
          <IconButton aria-label="User profile">
            <User />
            <span>Profile</span>
          </IconButton>
        </Sidebar.Trigger>
        <Sidebar.Content name="mySidebar">
          <LoginRegister />
        </Sidebar.Content>
      </Sidebar.Provider>

      <IconButton aria-label="Search" onClick={handleSearchToggle}>
        <Search />
        <span>Search</span>
      </IconButton>

      <Sidebar.Provider>
        <Sidebar.Trigger opens="myWishlistSidebar" position="right">
          <IconButton aria-label="Wishlist">
            <Heart />
            {wishList.length > 0 && <Badge>{wishList.length}</Badge>}
            <span>Wishlist</span>
          </IconButton>
        </Sidebar.Trigger>
        <Sidebar.Content name="myWishlistSidebar">
          <ShoppingCartWishlist choice="wishlist" />
        </Sidebar.Content>
      </Sidebar.Provider>

      <Sidebar.Provider>
        <Sidebar.Trigger opens="myCartShopSidebar" position="right">
          <IconButton aria-label="Cart">
            <Shop />
            {totalQty > 0 && <Badge>{totalQty}</Badge>}
            <span>Cart</span>
          </IconButton>
        </Sidebar.Trigger>
        <Sidebar.Content name="myCartShopSidebar">
          <ShoppingCartWishlist choice="cart" />
        </Sidebar.Content>
      </Sidebar.Provider>
    </BottomNavWrapper>
  );
};

export default BottomNav;
