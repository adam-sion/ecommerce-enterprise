import styled, { css } from "styled-components";
import CustomButton from "../../utils/Button/Button";
import { FaCartShopping } from "react-icons/fa6";
import {
  Rating,
  ReviewsCount,
  StarContainer,
} from "../CardShop/CardShop.styles";
import RenderStars from "../../utils/RenderStars/RenderStars";
import { truncateDescription } from "../../utils/generalFunctions";
import Modal from "../../utils/Modal/Modal";
import CardShop from "../CardShop/CardShop";
import useHoverAnimationImg from "../../../hooks/useHoverAnimationImg";
import {
  moveInFromLeft,
  moveOutLeft,
  slideInFromRight,
  slideOutToRight,
} from "../../utils/Animations/animations";
import HasDiscount from "../../utils/HasDiscount/HasDiscount";
import Row from "../../utils/Row/Row";
import Heading from "../../utils/Heading/heading";
import LikeIconButton from "../../utils/Button/LikeBtn";
import { Link } from "react-router-dom";
const breakPoint = "610px";

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  /* max-height: 15rem; */
  overflow: hidden;
  @media (max-width: ${breakPoint}) {
    flex-direction: column;
    align-items: flex-start;
    max-width: 30rem;
    margin: auto;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  flex: 0.4;
  height: auto;
  overflow: hidden;
  border-radius: var(--border-radius-medium);
  margin-right: var(--spacing-lg);
  max-width: 18.75rem;
  max-height: 18.75rem;
  @media (max-width: ${breakPoint}) {
    flex: 1;
    width: 100%; /* Ensure wrapper takes up full width */
    max-width: 100%; /* Remove any max-width constraints */
    margin-right: 0; /* Reset margins */
    margin: 0 auto 1rem auto; /* Center the wrapper and add bottom margin */
    position: relative; /* Ensure the position doesn't conflict with inner content */
  }
`;
const ProductInfo = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: ${breakPoint}) {
    width: 100%;
    align-items: flex-start;
  }
`;
const ProductImage = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: none;
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

const ThumbnailImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: none;
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

const Category = styled.p`
  font-size: var(--font-size-small);
  color: var(--dark-grey-color);
  margin: 0 0 var(--spacing-md) 0;
`;

const Description = styled.p`
  font-size: var(--font-size-small);
  color: var(--text-color);
  margin-bottom: var(--spacing-md);
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: var(--spacing-md);
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-md);
`;

const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FooterElement = styled(Row)`
  width: 100%;
`;

const ProductCardList = ({ product }) => {
  const { hovered, exiting, handleMouseEnter, handleMouseLeave } =
    useHoverAnimationImg();
  return (
    <CardContainer
      onMouseEnter={() => handleMouseEnter(product.id)}
      onMouseLeave={() => handleMouseLeave(product.id)}
    >
      <ImageWrapper>
        <Link to={"/shop/" + product.slug}>
          <ProductImage
            src={`/shop/${product.category}/${product.image}`}
            alt={product.title}
            $isHovered={hovered === product.id}
            $isExiting={exiting === product.id}
          />
          <ThumbnailImage
            src={`/shop/${product.category}/${product.thumbnails[0]}`}
            alt={`${product.title} thumbnail`}
            $isHovered={hovered === product.id}
            $isExiting={exiting === product.id}
          />
        </Link>
      </ImageWrapper>
      <ProductInfo>
        <ReviewContainer>
          <Rating>
            <StarContainer>{RenderStars(product.rating.rate)}</StarContainer>
            <ReviewsCount>
              ({product.rating.count} customer reviews)
            </ReviewsCount>
          </Rating>
        </ReviewContainer>
        <Link to={"/shop/" + product.slug}>
          <Heading as="h5">{product.title}</Heading>
        </Link>
        <Category>
          {product.category}, {product.subcategory}
        </Category>
        <Description>
          {truncateDescription(product.description, 120)}
        </Description>
        <FooterElement
          type="horizontal"
          $justifyContent="space-between"
          $alignItems="center"
          $flexGap=".5rem"
        >
          <PriceContainer>
            <HasDiscount product={product} $fontSize="var(--font-size-h6)" />
          </PriceContainer>
          <Row
            type="horizontal"
            $justifyContent="flex-start"
            $alignItems="center"
            $flexGap=".5rem"
          >
            <ButtonContainer>
              <Modal>
                <Modal.Trigger opens="product-preview">
                  <CustomButton
                    size="extra-small"
                    $invert
                    color="var(--primary-color-dark-1)"
                  >
                    <FaCartShopping />
                  </CustomButton>
                </Modal.Trigger>
                <Modal.Content name="product-preview">
                  <CardShop product={product} />
                </Modal.Content>
              </Modal>
            </ButtonContainer>
            <ButtonContainer>
              <LikeIconButton
                product={product}
                WrapperComponent={
                  <CustomButton
                    size="extra-small"
                    $invert
                    color="var(--primary-color-dark-1)"
                  />
                }
              />
            </ButtonContainer>
          </Row>
        </FooterElement>
      </ProductInfo>
    </CardContainer>
  );
};
export default ProductCardList;
