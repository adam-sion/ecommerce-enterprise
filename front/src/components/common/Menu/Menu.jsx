import Search from "../../../assets/icons/search.svg?react";
import Heart from "../../../assets/icons/heart.svg?react";
import User from "../../../assets/icons/user.svg?react";
import Shop from "../../../assets/icons/shop.svg?react";
import LogoWebsite from "../../../assets/img/logo-website/pureEssence-logo1.png";
import { Link } from "react-router-dom";
import LoginRegister from "../LoginRegister/LoginRegister";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getFilteredProductsWishlist } from "../../utils/generalFunctions";
import {
  Badge,
  ContainerLargeScreenMenu,
  ContainerSmallScreenMenu,
  IconButton,
  IconsWrapper,
  LogoContainer,
  MobileMenuContainer,
  Nav,
  NavContainer,
  NavSection,
} from "./Menu.styles";
import { getTotalCartQtity } from "../../../features/shoppingCart/shoppingCartSlice";
import SearchComponent from "../SearchComponent/SearchComponent";
import ShoppingCartWishlist from "../ShoppingCartWishlist/ShoppingCartWishlist";
import Sidebar from "../Sidebar/Sidebar";
import MenuNavigationLargeSC from "./MenuNavigationLargeSC";
import MenuNavigationSmallSC from "./MenuNavigationSmallSC";
import BottomNav from "./BottomNav";

const Menu = () => {
  // To get number of product added to cart
  const totalQty = useSelector(getTotalCartQtity);

  // To get number of product liked
  const productsLiked = useSelector((state) => state.wishList.likes);
  const products = useSelector((state) => state.products.products);
  const { wishList } = getFilteredProductsWishlist(productsLiked, products);

  // To keep menu sticky
  const [isSticky, setIsSticky] = useState(false);

  // To open or close the search component
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // To open or close the search component
  const handleSearchToggle = (e) => {
    e.preventDefault();
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <Nav $isSticky={isSticky} aria-label="Main navigation">
      <NavContainer>
        <NavSection>
          <LogoContainer $isSticky={isSticky}>
            <Link to="/">
              <img src={LogoWebsite} alt="Pure Essence Logo" />
            </Link>
          </LogoContainer>
        </NavSection>
        <NavSection>
          {/* Menu Navigation //the middle one// only for large screen */}
          <ContainerLargeScreenMenu>
            <MenuNavigationLargeSC />
          </ContainerLargeScreenMenu>
          {/* Menu Navigation //hamburguer // only for small screen */}
          <ContainerSmallScreenMenu>
            <MenuNavigationSmallSC />
          </ContainerSmallScreenMenu>
        </NavSection>
        <NavSection className="icon-wrapper">
          <IconsWrapper>
            <Sidebar.Provider>
              <Sidebar.Trigger opens="mySidebar" position="right">
                <IconButton aria-label="User profile">
                  <User />
                </IconButton>
              </Sidebar.Trigger>
              <Sidebar.Content name="mySidebar">
                <LoginRegister />
              </Sidebar.Content>
            </Sidebar.Provider>

            <IconButton aria-label="Search" onClick={handleSearchToggle}>
              <Search />
            </IconButton>

            <Sidebar.Provider>
              <Sidebar.Trigger opens="mySidebar" position="right">
                <IconButton aria-label="Wishlist">
                  <Heart />
                  <Badge>{wishList.length}</Badge>
                </IconButton>
              </Sidebar.Trigger>
              <Sidebar.Content name="mySidebar">
                <ShoppingCartWishlist choice="wishlist" />
              </Sidebar.Content>
            </Sidebar.Provider>

            <Sidebar.Provider>
              <Sidebar.Trigger opens="myCartShopSidebar" position="right">
                <IconButton aria-label="Cart">
                  <Shop />
                  <Badge>{totalQty}</Badge>
                </IconButton>
              </Sidebar.Trigger>
              <Sidebar.Content name="myCartShopSidebar">
                <ShoppingCartWishlist choice="cart" />
              </Sidebar.Content>
            </Sidebar.Provider>
          </IconsWrapper>
        </NavSection>
      </NavContainer>
      <SearchComponent isOpen={isSearchOpen} onClose={handleSearchToggle} />
      {/* Menu Mobile Navigation //position bottom fixed // only for small screen */}
      <MobileMenuContainer>
        <BottomNav
          wishList={wishList}
          totalQty={totalQty}
          handleSearchToggle={handleSearchToggle}
        />
      </MobileMenuContainer>
    </Nav>
  );
};

export default Menu;
