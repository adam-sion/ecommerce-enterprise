import styled from "styled-components";
import { FaUser, FaEnvelope } from "react-icons/fa";

const ReviewContainer = styled.div`
  max-width: 800px;
  border-radius: var(--border-radius-medium);
`;

const ReviewHeader = styled.h2`
  font-family: var(--font-primary);
  font-size: var(--font-size-h5);
  color: var(--text-color);
  margin: var(--spacing-sm) 0;
`;

const ReviewNote = styled.p`
  font-family: var(--font-secondary);
  color: var(--grey-color);
  font-size: var(--font-size-body);
`;

const ReviewForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const ReviewTextArea = styled.textarea`
  grid-column: 1 / 3;
  padding: var(--spacing-sm);
  border-radius: var(--border-radius-medium);
  border: 1px solid var(--light-grey-color);
  resize: none;
  height: 150px;
  font-family: var(--font-secondary);
  font-size: var(--font-size-body);
  color: var(--text-color);
  box-shadow: var(--shadow-small);
  transition: border-color var(--transition-quick);

  &:focus {
    border-color: var(--primary-color);
  }

  @media (max-width: 720px) {
    grid-column: 1;
  }
`;

const InputWrapper = styled.div`
  position: relative;
`;

const InputField = styled.input`
  width: 100%;
  padding: var(--spacing-sm);
  padding-left: 2.5rem;
  border-radius: var(--border-radius-medium);
  border: 1px solid var(--light-grey-color);
  font-family: var(--font-secondary);
  font-size: var(--font-size-body);
  color: var(--text-color);
  box-shadow: var(--shadow-small);
  transition: border-color var(--transition-quick);

  &:focus {
    border-color: var(--primary-color);
  }
`;

const InputIcon = styled.div`
  position: absolute;
  top: 50%;
  left: var(--spacing-sm);
  transform: translateY(-50%);
  color: var(--accent-color);
`;

const RatingWrapper = styled.div`
  grid-column: 1 / 3;
  display: flex;
  align-items: center;

  @media (max-width: 720px) {
    grid-column: 1;
  }
`;

const RatingLabel = styled.label`
  font-family: var(--font-secondary);
  font-size: var(--font-size-body);
  color: var(--text-color);
  margin-right: var(--spacing-sm);
`;

const StarRating = styled.div`
  display: flex;
`;

const Star = styled.span`
  font-size: 1.5rem;
  color: var(--primary-color-dark-4);
  cursor: pointer;
  transition: color var(--transition-quick);

  &:hover,
  &:focus {
    color: var(--accent-color-light-1);
  }
`;

const SubmitButton = styled.button`
  grid-column: 1 / 3;
  padding: var(--spacing-sm);
  background-color: var(--accent-color);
  color: var(--background-color);
  border: none;
  border-radius: var(--border-radius-large);
  font-family: var(--font-secondary);
  font-size: var(--font-size-button);
  cursor: pointer;
  transition: background-color var(--transition-quick);
  box-shadow: var(--shadow-medium);

  &:hover {
    background-color: var(--accent-color-light-1);
  }

  @media (max-width: 720px) {
    grid-column: 1;
  }
`;

const ReviewSection = ({ product }) => {
  return (
    <ReviewContainer>
      <ReviewHeader>Be the first to review {product.title}</ReviewHeader>
      <ReviewNote>
        Your email address remains confidential. Required fields are noted with
        *
      </ReviewNote>
      <ReviewForm>
        <ReviewTextArea placeholder="Your Review*" />
        <InputWrapper>
          <InputField placeholder="Name*" />
          <InputIcon>
            <FaUser />
          </InputIcon>
        </InputWrapper>
        <InputWrapper>
          <InputField placeholder="E-mail*" />
          <InputIcon>
            <FaEnvelope />
          </InputIcon>
        </InputWrapper>
        <RatingWrapper>
          <RatingLabel>Your Rating :</RatingLabel>
          <StarRating>
            <Star>☆</Star>
            <Star>☆</Star>
            <Star>☆</Star>
            <Star>☆</Star>
            <Star>☆</Star>
          </StarRating>
        </RatingWrapper>
        <SubmitButton>Submit ➔</SubmitButton>
      </ReviewForm>
    </ReviewContainer>
  );
};

export default ReviewSection;
