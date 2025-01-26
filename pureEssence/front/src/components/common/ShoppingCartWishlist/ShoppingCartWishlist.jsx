import ItemsCard from "./ItemsCard";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Shop from "../../../assets/icons/shop.svg?react";
import WishList from "../../../assets/icons/list.svg?react";

import {
  BadgeWrapper,
  Container,
  ItemsCardContainer,
  NoItemsMessage,
  Subtotal,
  Support,
  TabButton,
  TabContent,
  Tabs,
  TabWrapper,
  WrapperFooter,
} from "./styles";
import { useSelector } from "react-redux";
import {
  formatCurrency,
  getFilteredProductsWishlist,
} from "../../utils/generalFunctions";
import { Badge } from "../Menu/Menu.styles";
import {
  getTotalCartPrice,
  getTotalCartQtity,
} from "../../../features/shoppingCart/shoppingCartSlice";
import { Link } from "react-router-dom";
import { useContext } from "react";
import useTabs from "../../../hooks/useTabs";
import Row from "../../utils/Row/Row";
import CustomButton from "../../utils/Button/Button";
import { SidebarContext } from "../Sidebar/Sidebar";

const ShoppingCartWishlist = ({ choice }) => {
  // Import ShoppingCart Data
  const cart = useSelector((state) => state.shoppingCart.cart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const totalQtity = useSelector(getTotalCartQtity);
  // Import Wishlist Data
  const productsLiked = useSelector((state) => state.wishList.likes);
  const products = useSelector((state) => state.products.products);
  const { wishList } = getFilteredProductsWishlist(productsLiked, products);
  const { activeTab, switchTab } = useTabs(choice);
  const { closeSidebar } = useContext(SidebarContext);
  return (
    <Container>
      <Tabs>
        <TabWrapper>
          <BadgeWrapper>
            <Badge>{totalQtity}</Badge>
          </BadgeWrapper>
          <TabButton
            $active={activeTab === "cart"}
            onClick={() => switchTab("cart")}
          >
            Cart
          </TabButton>
        </TabWrapper>
        <TabWrapper>
          <BadgeWrapper>
            <Badge>{wishList.length}</Badge>
          </BadgeWrapper>
          <TabButton
            $active={activeTab === "wishlist"}
            onClick={() => switchTab("wishlist")}
          >
            Wishlist
          </TabButton>
        </TabWrapper>
      </Tabs>
      {/* Shopping Cart */}
      <TabContent $active={activeTab === "cart"}>
        {cart.length > 0 ? (
          <>
            <ItemsCardContainer>
              {cart.map((product) => (
                <ItemsCard
                  product={product}
                  key={`${product.id}`}
                  closeSidebar={closeSidebar}
                />
              ))}
            </ItemsCardContainer>
            <WrapperFooter>
              <Subtotal>
                <span>Subtotal:</span>
                <span>{formatCurrency(totalCartPrice)}</span>
              </Subtotal>
              <Row
                type="horizontal"
                $justifyContent="center"
                $alignItems="flex-start"
                $flexGap="1.5rem"
              >
                <Link to="/cart-summary">
                  <CustomButton
                    size="mini"
                    $invert
                    color="var(--primary-color-dark-3)"
                    onClick={() => closeSidebar()}
                  >
                    View Cart
                  </CustomButton>
                </Link>
                <Link to="/cart-summary">
                  <CustomButton
                    size="mini"
                    color="var(--primary-color-dark-3)"
                    onClick={() => closeSidebar()}
                  >
                    Check Out
                  </CustomButton>
                </Link>
              </Row>
              <Support>
                <div className="support-item">
                  <FaPhone />
                  <span>Phone: +00 654 321 9874</span>
                </div>
                <div className="support-item">
                  <FaMapMarkerAlt />
                  <span>123 Main Street, Anytown, USA. Zip: 12345</span>
                </div>
              </Support>
            </WrapperFooter>
          </>
        ) : (
          <NoItemsMessage>
            <Shop />
            <p>No items in your Shopping Cart</p>
          </NoItemsMessage>
        )}
      </TabContent>
      {/* Wishlist */}
      <TabContent $active={activeTab === "wishlist"}>
        {wishList.length > 0 ? (
          wishList.map((product) => (
            <ItemsCard
              cardShop={false}
              key={`${product.id}`}
              product={product}
              closeSidebar={closeSidebar}
            />
          ))
        ) : (
          <NoItemsMessage>
            <WishList />
            <p>No items in your wishlist</p>
          </NoItemsMessage>
        )}
      </TabContent>
    </Container>
  );
};

export default ShoppingCartWishlist;
