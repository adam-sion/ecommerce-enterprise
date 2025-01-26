import styled from "styled-components";
import Heading from "../../utils/Heading/heading";
import { FaArrowRight } from "react-icons/fa";
const NewsletterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-color);
  padding: 2.5rem 1rem;
  margin-bottom: 5rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  transform: translateY(-5px);
  border: 5px solid rgba(255, 255, 255, 0.4);
  h5 {
    font-size: 1.5rem;
    font-family: var(--font-secondary);
    font-weight: 400;
    color: var(--text-color-dark);
    margin-bottom: 1rem;
  }
`;
const NewsletterForm = styled.form`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 2rem;
  width: 100%;
  max-width: 500px;
  margin-top: 1rem;
  @media (max-width: 580px) {
    background-color: transparent;
    flex-direction: column;
    gap: 1rem;
  }
`;

const NewsletterInput = styled.input`
  border: none;
  background: transparent;
  padding: 0.5rem;
  outline: none;
  flex: 1 1 80%; /* flex-grow: 1, flex-shrink: 1, flex-basis: 80% */
  padding: 0 1rem;
  @media (max-width: 580px) {
    background-color: #fff;
    padding: 0.75rem 1.5rem;
    border-radius: 2rem;
  }
`;

const NewsletterButton = styled.button`
  background: var(--accent-color);
  border: none;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  transition: background var(--transition-quick);
  flex: 0 1 auto; /* flex-grow: 0, flex-shrink: 1, flex-basis: auto */
  &:hover {
    background: var(--accent-color-light-1);
  }
`;
const Newsletter = () => {
  // Function to handle subscription

  return (
    <NewsletterWrapper>
      <Heading as="h3" $marginBottom="1rem">
        Subscribe Now!
      </Heading>
      <Heading as="h5">You will receive 15% off on your first order!</Heading>
      <NewsletterForm>
        <NewsletterInput type="email" placeholder="Your email" />
        <NewsletterButton>
          <span>SUBSCRIBE</span>
          <FaArrowRight />
        </NewsletterButton>
      </NewsletterForm>
    </NewsletterWrapper>
  );
};

export default Newsletter;
