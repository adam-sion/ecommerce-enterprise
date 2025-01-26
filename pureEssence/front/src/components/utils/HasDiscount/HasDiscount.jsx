import styled from "styled-components";
import Row from "../Row/Row";

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: var(--dark-grey-color);
  font-family: var(--font-secondary);
  font-size: var(--font-size-body);
`;

const DiscountedPrice = styled.span`
  color: black;
  font-family: var(--font-primary);
  font-size: ${({ $fontSize }) => $fontSize || "var(--font-size-h6)"};
  margin-left: 0.5rem;
`;

const Price = styled.span`
  color: black;
  font-family: var(--font-primary);
  font-size: ${({ $fontSize }) => $fontSize || "var(--font-size-h6)"};
`;

const HasDiscount = ({ product, $fontSize }) => {
  const hasDiscount = product.discount !== undefined && product.discount > 0;
  const discountedPrice = hasDiscount
    ? product.price * (1 - product.discount / 100)
    : null;

  return (
    <>
      {hasDiscount ? (
        <Row
          type="horizontal"
          $alignItems="center"
          $justifyContent="flex-start"
          $flexGap="0.4rem"
        >
          <DiscountedPrice $fontSize={$fontSize}>
            ${discountedPrice.toFixed(2)}
          </DiscountedPrice>
          <OriginalPrice $fontSize={$fontSize}>${product.price}</OriginalPrice>
        </Row>
      ) : (
        <Price $fontSize={$fontSize}>${product.price}</Price>
      )}
    </>
  );
};

export default HasDiscount;
