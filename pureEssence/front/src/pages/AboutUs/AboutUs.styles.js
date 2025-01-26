import styled from "styled-components";
import { shadowPulse } from "../../components/utils/Animations/animations";
import { Parallax } from "react-parallax";

export const Section = styled.section`
  max-width: var(--max-width-screen);
  margin: 0 auto 4rem;
  padding: var(--spacing-xxl) var(--spacing-xl);
  background-color: ${({ bgColor }) => bgColor || "var(--background-color)"};
  @media (max-width: 780px) {
    margin-bottom: 0px;
    padding-bottom: var(--spacing-md);
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: center;
  justify-content: space-around;
  gap: var(--spacing-xxl);
  flex-wrap: wrap;
  max-width: 1370px;
  margin: auto;
  @media (max-width: 640px) {
    gap: var(--spacing-md);
  }
`;

export const TextColumn = styled.div`
  flex: 2;
  max-width: 600px;
  @media (max-width: 640px) {
    margin-bottom: var(--spacing-xl);
  }
  h1,
  h2 {
    font-family: var(--font-secondary);
    font-size: ${({ size }) => size || "var(--font-size-h1)"};
    color: var(--text-color);
    margin-bottom: var(--spacing-lg);
  }

  p {
    font-family: var(--font-primary);
    font-size: var(--font-size-body);
    line-height: 1.6;
    color: var(--grey-color);
    margin-bottom: var(--spacing-lg);
  }
`;

export const ImageColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
`;

export const TeamMemberCard = styled.div`
  position: relative;
  width: 250px;
  text-align: center;
  background-color: var(--primary-color-light-8);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-large);
  box-shadow: var(--shadow-medium);
  transition: var(--transition-normal);
  overflow: hidden;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: var(--border-radius-large);
    margin-bottom: var(--spacing-md);
  }

  h3 {
    font-family: var(--font-secondary);
    font-size: var(--font-size-h5);
    color: var(--text-color);
    margin-bottom: var(--spacing-xs);
  }

  p {
    font-family: var(--font-primary);
    font-size: var(--font-size-small);
    color: var(--dark-grey-color);
    margin-bottom: var(--spacing-sm);
  }

  &:hover .social-icons {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const SocialIcons = styled.div`
  position: absolute;
  top: 160px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.3s ease-in-out;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px; /* Set a fixed width */
    height: 40px; /* Set a fixed height */
    background-color: white;
    border-radius: 50%; /* Make it a perfect circle */
    transition: all 0.3s ease-in-out;
  }

  svg {
    font-size: var(--font-size-h5);
    color: var(--primary-color-dark-5);
  }
`;

// Styles Our Core Values

export const CoreValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
  text-align: center;

  @media (max-width: 1024px) {
    gap: var(--spacing-md);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-sm);
  }
`;

export const ValueItem = styled.div`
  padding: clamp(1rem, 2vw, var(--spacing-md));
  border-radius: var(--border-radius-large);
  background-color: var(--primary-color-light-9);
  box-shadow: var(--shadow-medium);
  transition: transform var(--transition-quick);

  &:hover {
    box-shadow: var(--shadow-large);
  }

  @media (max-width: 480px) {
    padding: var(--spacing-sm);
  }
`;

export const IconWrapper = styled.div`
  margin-bottom: var(--spacing-sm);
  color: var(--primary-color-dark-3);
`;

export const ValueText = styled.p`
  font-size: var(--font-size-body);
  color: var(--text-color);
`;
// Styles history section
export const HistorySection = styled.section`
  background-color: var(--light-grey-color);
  padding: var(--spacing-xxl) 0;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  position: relative;
  max-width: var(--max-width-screen);
  width: 100%;
  padding: 0 var(--spacing-lg);
  z-index: 2;
  margin: auto;
`;

export const Header = styled.h2`
  font-size: var(--font-size-h2);
  margin-bottom: var(--spacing-lg);
  text-align: center;
  color: ${({ $color }) => $color || "var(--primary-color-dark-3)"};
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -var(--spacing-sm);
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--primary-color);
  }
`;

export const Paragraph = styled.p`
  font-size: var(--font-size-body);
  margin-bottom: 0.5rem;
  text-align: center;
  color: ${({ $color }) => $color || "var(--text-color)"};
  margin-bottom: ${({ $marginBottom }) => $marginBottom || "2rem"};
  max-width: 800px;
  line-height: 1.8;
  margin-left: auto;
  margin-right: auto;
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 900px;
  margin: auto;
`;

export const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 3px;
  height: 100%;
  background-color: var(--primary-color-light-3);
`;

export const TimelineItem = styled.div`
  position: relative;
  background-color: var(--background-color);
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--shadow-small);
  max-width: 600px;
  width: calc(50% - var(--spacing-lg)); /* Ensures even spacing */
  text-align: center;

  &:nth-child(odd) {
    align-self: flex-start;
  }

  &:nth-child(even) {
    align-self: flex-end;
  }

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
    width: 1.75rem;
    height: 1.75rem;
    background-color: var(--primary-color);
    border-radius: 50%;
    animation: ${shadowPulse} 2s infinite;
  }
`;
// Our Vision Styles
export const OurVisionSection = styled(Parallax)`
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Dark overlay */
    z-index: 1; /* Layer behind the text */
    pointer-events: none; /* Prevent interference with clicks */
  }
  div {
    padding: 0.8rem;
  }
`;
