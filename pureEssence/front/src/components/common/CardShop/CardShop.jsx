import { useContext, useEffect, useState } from "react";

import Counter from "../../utils/Counter/Counter";
import HasDiscount from "../../utils/HasDiscount/HasDiscount";
import Row from "../../utils/Row/Row";
import Heading from "../../utils/Heading/heading";
import CustomButton from "../../utils/Button/Button";
import {
  CardShopContainer,
  ImageContainer,
  MetaItem,
  OptionButton,
  OptionsContainer,
  PriceInfo,
  ItemLabel,
  ProductContainer,
  ProductDescription,
  ProductImage,
  ProductMeta,
  Rating,
  ReviewsCount,
  SaleTag,
  SizesWrapper,
  StarContainer,
  Thumbnail,
  ThumbnailsContainer,
  ViewMoreLinkContainer,
} from "./CardShop.styles";
import RenderStars from "../../utils/RenderStars/RenderStars";
import {
  handleAddToCart,
  truncateDescription,
} from "../../utils/generalFunctions";
import { ModalContext } from "../../utils/Modal/Modal";
import { addLike } from "../../../features/wishList/wishListSlice";
import { useDispatch } from "react-redux";
import { CustomLink } from "../../utils/Button/CustomLink";
import { useNavigate } from "react-router-dom";
import SocialIcons from "../../utils/SocialIcons/SocialIcons";

const CardShop = ({ product }) => {
  const dispatch = useDispatch();
  const { closeModal } = useContext(ModalContext);
  const [mainImage, setMainImage] = useState(product.image);
  const [activeThumbnail, setActiveThumbnail] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const handleThumbnailClick = (thumb) => {
    setMainImage(thumb);
    setActiveThumbnail(thumb);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  // Set the initial state of selectedSize to the first size
  useEffect(() => {
    if (product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]); // Set the first size as the default selected size
    }
  }, [product.sizes]);
  return (
    <CardShopContainer>
      <ImageContainer>
        <ThumbnailsContainer>
          {[product.image, ...product.thumbnails.slice(0, 3)].map(
            (thumb, index) => (
              <Thumbnail
                key={index}
                src={`/shop/${product.category}/${thumb}`}
                alt={`thumbnail ${index + 1}`}
                $active={thumb === activeThumbnail}
                onClick={() => handleThumbnailClick(thumb)}
              />
            )
          )}
        </ThumbnailsContainer>
        <ProductImage
          src={`/shop/${product.category}/${mainImage}`}
          alt="product img"
        />
      </ImageContainer>
      <ProductContainer>
        {product.sale && <SaleTag>SALE {product.sale}% OFF</SaleTag>}
        <Heading as="h3">{product.title}</Heading>
        <Rating>
          <StarContainer>{RenderStars(product.rating.rate)}</StarContainer>
          <ReviewsCount>({product.rating.count} customer reviews)</ReviewsCount>
        </Rating>
        <ProductDescription>
          {truncateDescription(product.description, 160)}
        </ProductDescription>
        <SizesWrapper>
          <ViewMoreLinkContainer>
            <CustomLink
              $color="var(--grey-color)"
              $underlineColor="var(--grey-color)"
              $size=".75rem"
              onClick={() => {
                navigate(`/shop/${product.slug}`);
                closeModal();
              }}
            >
              View More Details
            </CustomLink>
          </ViewMoreLinkContainer>
          <ItemLabel>Sizes:</ItemLabel>
          <OptionsContainer>
            {product.sizes.map((size) => (
              <OptionButton
                key={size}
                $isSelected={selectedSize === size}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </OptionButton>
            ))}
          </OptionsContainer>
        </SizesWrapper>
        <PriceInfo>
          <Row
            type="horizontal"
            $justifyContent="space-around"
            $alignItems="flex-start"
            $flexGap="1rem"
          >
            <Row
              type="vertical"
              $justifyContent="center"
              $alignItems="center"
              $flexGap=".5rem"
            >
              <ItemLabel>Price</ItemLabel>
              <HasDiscount product={product} $fontSize="var(--font-size-h4)" />
            </Row>
            <Row
              type="vertical"
              $justifyContent="center"
              $alignItems="center"
              $flexGap=".5rem"
            >
              <ItemLabel>Quantity</ItemLabel>
              <Counter
                size="normal"
                productId={product.id}
                quantity={quantity}
                onQuantityChange={setQuantity}
              />
            </Row>
          </Row>
        </PriceInfo>
        <div>
          <Row
            type="horizontal"
            $justifyContent="space-around"
            $alignItems="center"
            $flexGap="0.5rem"
          >
            <CustomButton
              size="extra-small"
              onClick={() => {
                handleAddToCart(product, dispatch, quantity);
                closeModal();
              }}
            >
              Add To Cart
            </CustomButton>
            <CustomButton
              size="extra-small"
              $invert
              color={"var(--primary-color-dark-2)"}
              onClick={() => {
                closeModal();
                dispatch(addLike(product.id));
              }}
            >
              Add To Wishlist
            </CustomButton>
          </Row>
        </div>
        <ProductMeta>
          <MetaItem>Category: {product.category}</MetaItem>
          <MetaItem>Material: {product.materials.join(", ")}</MetaItem>
        </ProductMeta>
        <SocialIcons />
      </ProductContainer>
    </CardShopContainer>
  );
};

export default CardShop;
