import beautyImage from "../../../assets/img/presentation/ingredients.jpg";
import styled from "styled-components";
import { FaCheckDouble } from "react-icons/fa";
import Heading from "../../utils/Heading/heading";
import CustomButton from "../../utils/Button/Button";
// Main Section Container
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  margin: 3rem auto;
  background-color: white;
  color: black;
  position: relative;
  overflow: hidden;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

// Content Wrapper for Text and Call to Action
const ContentWrapper = styled.div`
  flex: 1.5;
  padding: var(--spacing-xl);
  z-index: 1;
  max-width: 950px;
  margin-right: auto;
  /* background-color: var(--primary-color-dark-5); */
  @media (max-width: 768px) {
    padding: var(--spacing-lg);
  }
`;

// Description Text Style
const Description = styled.p`
  font-family: var(--font-secondary);
  font-size: var(--font-size-body);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
  color: var(--text-color-secondary);
`;

// Image Wrapper for the Product Image
const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  margin: var(--spacing-lg);
`;

// Styled Image
const StyledImage = styled.img`
  width: 100%;
  /* max-width: 400px; */
  border-radius: var(--border-radius-large);
  transition:
    transform 0.3s ease,
    filter 0.3s ease;
`;

// Decorative Element for Visual Interest
const DecorativeElement = styled.div`
  position: absolute;
  top: 15%;
  left: -10%;
  width: 250px;
  height: 250px;
  background: var(--secondary-color);
  opacity: 0.1;
  border-radius: 50%;
  z-index: 0;
  animation:
    pulse 6s infinite,
    float 3s ease-in-out infinite;
  filter: blur(60px);
  transform: scale(1.2);

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1.2);
    }
    50% {
      transform: scale(1.4);
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

// Gradient Overlay for the Background
const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    var(--primary-color-light-5) 0%,
    var(--background-color) 100%
  );
  opacity: 0.25;
  z-index: 0;
`;

// Ingredients Section for the Ingredients List
const IngredientsSection = styled.div`
  padding: var(--spacing-md);
  background-color: var(--background-secondary);
  border-radius: var(--border-radius-medium);
`;

// Ingredients List Styling
const IngredientsList = styled.ul`
  list-style: none;
  padding: 0;
`;

// Individual Ingredient Item
const IngredientItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--spacing-md);

  .icon {
    font-size: 2rem;
    color: var(--primary-color);
    margin-right: var(--spacing-sm);
  }

  .details {
    max-width: 500px;

    .name {
      font-size: var(--font-size-h5);
      font-weight: bold;
      color: var(--primary-color-dark-3);
      margin-bottom: var(--spacing-xs);
    }

    .description {
      font-family: var(--font-secondary);
      font-size: var(--font-size-small);
      color: var(--text-color-secondary);
    }
  }
`;

const ingredients = [
  {
    icon: <FaCheckDouble />,
    name: "Aloe Vera",
    description:
      "Hydrates and soothes the skin, providing a cooling sensation.",
  },
  {
    icon: <FaCheckDouble />,
    name: "Coconut Oil",
    description: "Moisturizes deeply, leaving the skin soft and supple.",
  },
  {
    icon: <FaCheckDouble />,
    name: "Shea Butter",
    description:
      "Rich in vitamins A and E, it nourishes and protects the skin.",
  },
  {
    icon: <FaCheckDouble />,
    name: "Green Tea Extract",
    description: "Packed with antioxidants, it helps fight free radicals.",
  },
];

// Ingredients Component
const Ingredients = () => (
  <IngredientsSection>
    <Heading as="h4" $marginBottom="2rem">
      Highlight Key Ingredients
    </Heading>
    <IngredientsList>
      {ingredients.map((ingredient, index) => (
        <IngredientItem key={index}>
          <div className="icon">{ingredient.icon}</div>
          <div className="details">
            <div className="name">{ingredient.name}</div>
            <div className="description">{ingredient.description}</div>
          </div>
        </IngredientItem>
      ))}
    </IngredientsList>
  </IngredientsSection>
);

// Main OrganicSection Component
const OrganicSection = () => (
  <Section>
    <GradientOverlay />
    <DecorativeElement />
    <ContentWrapper>
      <Heading
        as="h2"
        $marginBottom="1.4rem"
        $colorText="var(--primary-color-dark-4)"
      >
        The Luxury of Organic Skincare
      </Heading>
      <Description>
        Discover the purest organic ingredients carefully crafted into luxurious
        skincare products. Our formulations are designed to rejuvenate and
        enhance your natural beauty, giving your skin the care it truly
        deserves.
      </Description>

      <Ingredients />
      <CustomButton size="small">Explore Our Range</CustomButton>
    </ContentWrapper>
    <ImageWrapper>
      <StyledImage src={beautyImage} alt="Organic skincare product" />
    </ImageWrapper>
  </Section>
);

export default OrganicSection;
