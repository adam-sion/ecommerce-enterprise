import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const EmptyCartWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light-grey-color);
`;

const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EmptyIcon = styled(RiShoppingCartLine)`
  font-size: 7.7rem;
  color: var(--dark-grey-color);
  margin-bottom: var(--spacing-lg);
`;

const EmptyMessage = styled.p`
  font-size: 1.7rem;
  margin-bottom: var(--spacing-lg);
  color: var(--dark-grey-color);
`;

const StyledLink = styled(Link)`
  color: #666;
  font-size: 1.1rem;
  text-decoration: underline;
  transition: color var(--transition-slow);

  &:hover {
    color: black;
    text-decoration: underline;
  }
`;

const EmptyCart = () => {
  return (
    <EmptyCartWrapper>
      <EmptyContainer>
        <EmptyIcon />
        <EmptyMessage>Your shopping cart is empty</EmptyMessage>
        <StyledLink to="/all-products">Start adding items now!</StyledLink>
      </EmptyContainer>
    </EmptyCartWrapper>
  );
};

export default EmptyCart;
