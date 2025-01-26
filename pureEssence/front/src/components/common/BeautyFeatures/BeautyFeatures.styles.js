import {
  rotate,
  shadowPulse,
  slideInLeft,
  slideInRight,
} from "../../utils/Animations/animations";
import styled from "styled-components";
import Heading from "../../utils/Heading/heading";

// Create a styled component for the SVG with rotation animation
export const RotatingSVG = styled.svg`
  animation: ${rotate} 45s linear infinite;
`;
export const Section = styled.section`
  padding: 60px;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 0 30px 30px;
  }
  @media (max-width: 1260px) {
    padding-top: 0;
  }
`;

export const Container = styled.div`
  max-width: 1480px;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;

  @media (min-width: 1260px) {
    flex-direction: row;
  }
`;

export const Column2 = styled.div`
  flex: 1;
  color: var(--text-color);
  @media (max-width: 1060px) {
    flex: 1.5;
    width: 85%;
    margin: auto;
  }

  animation: ${slideInRight} 1s ease forwards;
`;

export const Text = styled.p`
  margin-bottom: var(--spacing-xxl);
  color: var(--primary-color-dark-4);
  line-height: 1.6;
  font-size: var(--font-size-body);

  @media (max-width: 769px) {
    margin-bottom: var(--spacing-xxl);
  }
`;

export const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Feature = styled.div`
  flex: 1 1 45%;
  border-radius: 15px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-xl);
  animation: ${shadowPulse} 5s infinite;
  padding: 1rem;
  @media (max-width: 769px) {
    margin-bottom: var(--spacing-sm);
  }
  svg {
    flex: 0.2;
    width: 5rem;
    height: auto;
    margin-right: 15px;
    fill: var(--primary-color-light-1);
  }

  div {
    flex: 0.7;
    color: var(--text-color);
    font-size: 1rem;
    line-height: 1.5;
  }

  div p {
    color: var(--primary-color-dark-5);
    font-size: var(--font-size-body);
  }

  opacity: 0;
  transform: translateY(20px);
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: var(--spacing-sm);
  @media (max-width: 770px) {
    margin-top: var(--spacing-md);
  }
`;

export const Title = styled(Heading).attrs({ as: "h2" })`
  color: var(--primary-color);
  margin-bottom: 1.4rem;
  text-align: left;
  font-weight: bold;
`;
//
export const Column1 = styled.div`
  flex: 0.8;
  display: flex;
  justify-content: center;
  /* margin-bottom: var(--spacing-lg); */
  @media (max-width: 1060px) {
    flex: 0.5;
  }
  @media (min-width: 769px) {
    margin-bottom: 0;
  }

  animation: ${slideInLeft} 1s ease forwards;
`;

export const ContainerCol1 = styled.div`
  position: relative;
  width: 100%;
  min-height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 510px) {
    width: 80%;
    min-height: auto;
  }
`;

export const CircleWrapper = styled.div`
  position: relative;
  width: 540px; /* Outer circle width */
  height: 540px; /* Outer circle height */
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 510px) {
    min-width: 100% !important;
    height: 22rem;
    margin-bottom: 1.5rem;
  }
`;

export const SVGContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none; /* Prevent SVG from blocking mouse events */
  @media (max-width: 510px) {
    display: none;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  text {
    font-size: 1.1rem;
    fill: var(--primary-color);
    font-family: var(--font-primary);
    font-weight: 700;
  }
`;

export const InnerCircle = styled.div`
  position: absolute;
  width: 400px; /* Inner circle width */
  height: 400px; /* Inner circle height */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--background-color);
  @media (max-width: 510px) {
    width: 70%;
    height: auto;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: transform 0.5s ease;
    object-fit: cover;
    cursor: pointer;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;
