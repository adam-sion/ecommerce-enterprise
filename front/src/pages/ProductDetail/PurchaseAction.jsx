import { useNavigate } from "react-router-dom";
import {
  ButtonRow,
  ControlWrapper,
  ItemLabel,
  PurchaseControl,
  SizeButton,
  SizeItem,
  SizeList,
} from "./ProductDetail.styles";
import Counter from "../../components/utils/Counter/Counter";
import CustomButton from "../../components/utils/Button/Button";
import { handleAddToCart } from "../../components/utils/generalFunctions";

const PurchaseAction = ({
  product,
  onSelectedSize,
  selectedSize,
  quantity,
  onSelectQuantity,
  dispatch,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <PurchaseControl
        type="horizontal"
        $justifyContent="center"
        $alignItems="center"
        $flexGap="1.2rem"
      >
        {product.sizes && (
          <ControlWrapper
            type="vertical"
            $justifyContent="center"
            $alignItems="center"
            $flexGap=".2rem"
          >
            <ItemLabel>Sizes:</ItemLabel>
            <SizeList>
              {product.sizes.map((size, index) => (
                <SizeButton
                  className={selectedSize === size ? "selected-size" : ""}
                  onClick={() => onSelectedSize(size)}
                  key={index}
                >
                  <SizeItem>{size}</SizeItem>
                </SizeButton>
              ))}
            </SizeList>
          </ControlWrapper>
        )}

        <ControlWrapper>
          <ItemLabel>Quantity:</ItemLabel>
          <Counter
            size="normal"
            productId={product.id}
            quantity={quantity}
            onQuantityChange={onSelectQuantity}
            color="var(--accent-color)"
          />
          {/* <StockInfo>
              <strong>Stock:</strong> {product.stock - quantity}
            </StockInfo> */}
        </ControlWrapper>
      </PurchaseControl>
      <ButtonRow $flexGap=".8rem">
        <CustomButton
        active={true}
          size="extra-small"
          color="var(--accent-color)"
          $invert={true}
          onClick={() => {
            handleAddToCart(product, dispatch, quantity);
            navigate("/cart-summary");
          }}
        >
          Add to Cart
        </CustomButton>
        <CustomButton
          size="extra-small"
          color="var(--accent-color)"
          onClick={() => {
            handleAddToCart(product, dispatch, quantity);
            navigate("/cart-summary");
          }}
          className="btn-color-inv"
        >
          Buy Now
        </CustomButton>
      </ButtonRow>
    </>
  );
};

export default PurchaseAction;
