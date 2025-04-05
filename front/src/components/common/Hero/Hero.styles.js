import styled from "styled-components";
import backgroundImage from "../../../assets/img/background/background-home1.jpeg";
import backgroundImageMobile from "../../../assets/img/background/background-home1-mobile.jpeg";
import { zoomInDown } from "../../utils/Animations/animations";
import Heading from "../../utils/Heading/heading";

// Define the main HeroSection with a split layout, animated background, and parallax effect
export const HeroSection = styled.section`
  display: flex;
  height: 100vh;
  background: url(${backgroundImage}) no-repeat center center / cover;
  position: relative;
  overflow: hidden;
  align-items: center;
  animation: backgroundMove 30s infinite linear;
  background-attachment: fixed; // Parallax effect

  @keyframes backgroundMove {
    0% {
      background-position: center center;
    }
    50% {
      background-position: center top;
    }
    100% {
      background-position: center center;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    background-image: url(${backgroundImageMobile});
    background-size: cover;
    background-position: center top;
    height: 60vh;
    background-attachment: scroll; // Disable parallax on mobile
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 0.5),
      rgba(255, 255, 255, 0.2)
    );
    z-index: 0;
  }
`;

// Define the container for the text content
export const TextContainer = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  animation: ${zoomInDown} 1.5s var(--transition-quick);
  z-index: 1;
`;

// Define styles for the HeroTitle with text shadow and enhanced typography
export const HeroTitle = styled(Heading).attrs({ as: "h1" })`
  color: white;
  margin-bottom: var(--spacing-lg);
  animation: ${zoomInDown} 2s var(--transition-normal);
  z-index: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);

  font-size: 3.5rem; // Larger font size for impact

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

// Define styles for the Subtitle with text shadow
export const Subtitle = styled(Heading).attrs({ as: "h3" })`
  animation: ${zoomInDown} 2.5s var(--transition-normal);
  z-index: 1;
  margin-bottom: var(--spacing-lg);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
  font-family: "Playfair Display", serif;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
