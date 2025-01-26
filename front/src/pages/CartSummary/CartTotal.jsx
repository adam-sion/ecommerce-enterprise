import { useSelector } from "react-redux";
import styled from "styled-components";
import { formatCurrency } from "../../components/utils/generalFunctions";
import { getTotalCartPrice } from "../../features/shoppingCart/shoppingCartSlice";

// Styled Components
const TotalWithExpenses = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: var(--border-radius-medium);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  width: 100%;
  background-color: white;
  box-shadow: var(--shadow-medium);
`;

const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: var(--spacing-sm);
  padding: var(--spacing-xs) 0;
  border-bottom: 1px dashed var(--light-grey-color);

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }

  span {
    font-size: var(--font-size-body);
  }

  .total {
    color: var(--primary-color-dark-4);
    font-weight: bold;
    font-size: var(--font-size-h4);
  }

  .shipping {
    font-size: var(--font-size-small);
    color: var(--dark-grey-color);

    span {
      color: var(--text-color);
      font-weight: bold;
    }
  }
`;

const Title = styled.h2`
  font-size: var(--font-size-h4);
  margin-bottom: var(--spacing-md);
  color: var(--text-color);
  padding-bottom: var(--spacing-xs);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: var(--accent-color);
    border-radius: 1px;
  }
`;

const CartTotal = () => {
  const totalCartPrice = useSelector(getTotalCartPrice);
  const shipping = 7;

  return (
    <TotalWithExpenses>
      <Title>Summary</Title>
      <FlexBetween>
        <span>Subtotal</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </FlexBetween>
      <FlexBetween className="shipping">
        <span>Shipping</span>
        <span>{formatCurrency(shipping)}</span>
      </FlexBetween>
      <FlexBetween>
        <span>
          <strong>Total</strong>
        </span>
        <span className="total">
          {formatCurrency(totalCartPrice + shipping)}
        </span>
      </FlexBetween>
    </TotalWithExpenses>
  );
};

export default CartTotal;
