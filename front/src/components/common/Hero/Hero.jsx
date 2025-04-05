import { Link } from "react-router-dom";
import CustomButton from "../../utils/Button/Button";
import { HeroSection, HeroTitle, Subtitle, TextContainer } from "./Hero.styles";

// Define the Hero component
const Hero = () => {
  return (
    <HeroSection>
      <TextContainer>
        <HeroTitle>Welcome to Je te veux</HeroTitle>
        <Subtitle $customBackground={true}>
          Discover the glow of handcrafted dreams
        </Subtitle>
        <Link to="/all-products">
          <CustomButton color="black">Explore Now</CustomButton>
        </Link>
      </TextContainer>
    </HeroSection>
  );
};

export default Hero;
