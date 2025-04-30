import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../features/shoppingCart/shoppingCartSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import Counter from "../../components/utils/Counter/Counter";
import CustomButton from "../../components/utils/Button/Button";
import Row from "../../components/utils/Row/Row";
import Heading from "../../components/utils/Heading/heading";
import CartTotal from "./CartTotal";
import EmptyCart from "../../components/common/EmptyCart/EmptyCart";
import Breadcrumb2 from "../../components/common/Breadcrumb/Breadcrumb2";

const CartWrapper = styled.section`
  padding: var(--spacing-xxxl) 1rem;
`;

const CartContainer = styled.div`
  max-width: 80rem;
  margin: auto;

  @media (max-width: 1024px) {
    width: 90%;
    margin: auto;
  }
`;

const GridContainer = styled.div`
  border-bottom: 1px solid black;
  margin: 1.5rem auto;
  display: grid;
  grid-template-columns: 25% repeat(5, 1fr);
  grid-template-rows: repeat(4, auto);
  row-gap: 1rem;
  column-gap: 1.4rem;
  align-items: center;
  padding: 1rem 0;

  @media (max-width: 1024px) {
    padding: 1rem 0;
  }
`;
const RowTitle = styled(GridContainer)`
  grid-template-rows: auto;
  margin: 0 auto;
  color: var(--primary-color-dark-2);
  font-weight: 700;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const GridItem = styled.div`
  font-size: var(--font-size-h5);
  &.item-1 {
    /* padding: 20px; */
    text-align: center;
  }

  &.item-2 {
    grid-column: span 2;
  }

  &.item-5 {
    position: relative;
  }

  @media (max-width: 1024px) {
    &.item-1 {
      grid-row: 1/2;
      grid-column: 1/3;
    }

    &.item-2 {
      grid-row: 1/2;
      grid-column: 3/-1;
    }

    &.item-3 {
      grid-column: span 2;
    }

    &.item-4 {
      grid-column: span 2;
    }

    &.item-5 {
      grid-column: span 2;
    }
  }

  @media (max-width: 800px) {
    &.item-1 {
      grid-row: 1/-1;
      grid-column: 1/3;
    }

    &.item-2 {
      grid-row: 1/2;
      grid-column: 3/-1;
    }

    &.item-3 {
      grid-row: 2/3;
      grid-column: 3/-1;
    }

    &.item-4 {
      grid-row: 3/4;
      grid-column: 3/-1;
    }

    &.item-5 {
      grid-row: 4/5;
      grid-column: 3/-1;
    }
  }
`;

const RemoveButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  cursor: pointer;
  color: var(--danger-color);
  &:hover {
    color: var(--danger-color-dark-1);
  }
`;

const CouponInput = styled.input`
  padding: 0.5rem 1rem;
  border: 2px solid var(--primary-color-dark-2);
  transition: all 0.5s ease-in-out;
  width: 11rem;
  background-color: white;
  margin-right: 1rem;
  color: black;

  color: var(--text-color);
  background-color: var(--background-primary-transparent-2);
  transition: var(--transition-quick);
  &:focus {
    background-color: var(--background-primary-transparent);
    border-color: var(--primary-color-dark-4);
  }
`;
const SubmitContainer = styled(Row)`
  margin-bottom: 2rem;
  margin-top: 3rem;
`;

const ImageWrapper = styled.div`
  border-radius: var(--border-radius-small);
  overflow: hidden;
  box-shadow: var(--shadow-small);
  display: block;
  width: 100%;
  height: 100%;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition:
      transform var(--transition-quick),
      filter var(--transition-quick);
  }

  &:hover img {
    transform: scale(1.1); /* Zoom effect */
    filter: brightness(0.9); /* Slightly darkens the image */
  }
`;
const CartSummary = () => {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <>
      {" "}
      <Breadcrumb2
        next="Shop"
        next2={["Product Detail", "/all-products"]}
        title="Cart Summary"
        maxWidth="1600px"
      />
      <CartWrapper>
        <CartContainer>
          <RowTitle>
            <GridItem className="item-1">PRODUCT</GridItem>
            <GridItem className="item-2"></GridItem>
            <GridItem className="item-3">PRICE</GridItem>
            <GridItem className="item-4">QUANTITY</GridItem>
            <GridItem className="item-5">TOTAL</GridItem>
          </RowTitle>

          {cart.map((product) => (
            <GridContainer key={product.id} className="grid-container">
              <GridItem className="item-1">
                <ImageWrapper>
                  <img
                    src={`${product.image}`}
                    alt={product.title}
                  />
                </ImageWrapper>
              </GridItem>
              <GridItem className="item-2">
                <Heading as="h4">
                  <Link to={`/shop/${product.slug}`}>{product.title}</Link>
                </Heading>
              </GridItem>
              <GridItem className="item-3">
                <div className="shopping-item__price">
                  <span className="shopping-item__price-value">
                    ${parseFloat(product.unitPrice).toFixed(2)}
                  </span>
                </div>
              </GridItem>
              <GridItem className="item-4">
                <Counter size="normal" productId={product.id} />
              </GridItem>
              <GridItem className="item-5">
                <div className="total-price-unit">
                  ${parseFloat(product.unitPrice * product.quantity).toFixed(2)}
                </div>
                <RemoveButton
                  onClick={() => dispatch(deleteProduct(product.id))}
                >
                  <FaRegTrashAlt size="1.2rem" />
                </RemoveButton>
              </GridItem>
            </GridContainer>
          ))}
          <SubmitContainer
            type="horizontal"
            $justifyContent="flex-start"
            $alignItems="flex-start"
            $flexGap="2rem"
          >
            <CouponInput type="text" placeholder="Coupon Code" />
            <CustomButton
            active={true}
              color="var(--primary-color-dark-2)"
              size="extra-small"
            >
              SUBMIT
            </CustomButton>
          </SubmitContainer>
          <CartTotal />
          <CustomButton onClick={()=> console.log('stripe')} color="var(--primary-color-dark-2)" size="extra-small">
            CHECKOUT
          </CustomButton>
        </CartContainer>
      </CartWrapper>
    </>
  );
};

export default CartSummary;
