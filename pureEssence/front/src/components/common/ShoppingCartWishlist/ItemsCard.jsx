import { CloseButton2 } from "../../utils/CloseButton/CloseButton";
import Counter from "../../utils/Counter/Counter";
import HasDiscount from "../../utils/HasDiscount/HasDiscount";
import { useDispatch } from "react-redux";
import { removeLike } from "../../../features/wishList/wishListSlice";
import { deleteProduct } from "../../../features/shoppingCart/shoppingCartSlice";
import { Link } from "react-router-dom";
import {
  CartItem,
  CloseButtonWrapper,
  ControlContainer,
  ItemContainer,
  ItemDetails,
  ItemImage,
  ItemImageWrapper,
  ItemInfo,
  ItemName,
  Price,
} from "./styles";

const ItemsCard = ({ cardShop = true, product, closeSidebar }) => {
  const dispatch = useDispatch();

  if (!product) return;

  function removeAction(id) {
    if (cardShop) {
      dispatch(deleteProduct(product.id));
    } else {
      dispatch(removeLike(id));
    }
  }
  return (
    <CartItem>
      <ItemContainer $cardShop={cardShop}>
        <CloseButtonWrapper>
          <CloseButton2
            aria-label="Remove item"
            onClick={() => removeAction(product.id)}
          />
        </CloseButtonWrapper>
        <ItemImageWrapper>
          <ItemImage
            src={`/shop/${product.category}/${product.image}`}
            alt={product.title}
          />
        </ItemImageWrapper>
        <ItemDetails>
          <ItemInfo>
            <Link to={"/shop/" + product.slug}>
              <ItemName onClick={() => closeSidebar()}>
                {product.title}
              </ItemName>
            </Link>

            {cardShop ? (
              <Price>${parseFloat(product.unitPrice).toFixed(2)}</Price>
            ) : (
              <HasDiscount product={product} />
            )}
          </ItemInfo>
          {cardShop && (
            <ControlContainer>
              <Counter
                color="var(--primary-color-dark-3)"
                size="small"
                productId={product.id}
              />
            </ControlContainer>
          )}
        </ItemDetails>
      </ItemContainer>
    </CartItem>
  );
};

export default ItemsCard;
