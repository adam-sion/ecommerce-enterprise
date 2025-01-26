import styled from "styled-components";
import {
  slideInLeft,
  slideInRight,
} from "../../../utils/Animations/animations";
import Heading from "../../../utils/Heading/heading";

const breakpointXxl = "1620px";
const breakpointMd = "768px";
const breakpointXs = "480px";
const gradientRad1 =
  "radial-gradient(circle at 50% -30%, var(--primary-color), var(--primary-color), transparent 75%)";
const gradientRad2 =
  "radial-gradient(circle at 70% 150%,  	#76f4e7,  	#76f4e7, transparent 75%)";
const pageBackgroundColor = "white";
export const Section = styled.section`
  position: relative;
  width: 100%;
  padding: 3rem 0 6rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${pageBackgroundColor};
  background-image: ${gradientRad1}, ${gradientRad2};
  @media (max-width: ${breakpointMd}) {
    height: auto;
    padding: 2rem 0 5rem;
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  max-width: 1550px;
  @media (max-width: ${breakpointXxl}) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const TitleContainer = styled.div`
  text-align: center;
  display: flex;
  row-gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.faq-section-hidden {
    opacity: 0;
    transform: translateY(-20px);
  }
  &.faq-section-visible {
    animation: ${slideInLeft} 1s ease-in-out forwards;
  }
  h2 {
    @media (max-width: 580px) {
      margin-bottom: var(--spacing-xl);
    }
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 950px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  perspective: 1000px;
  &.faq-section-hidden {
    opacity: 0;
    transform: translateY(-20px);
  }
  &.faq-section-visible {
    animation: ${slideInRight} 1s ease-in-out forwards;
  }
  @media (max-width: ${breakpointXxl}) {
    height: 500px;
  }

  @media (max-width: ${breakpointXs}) {
    height: 400px;
  }
`;

export const CarouselEle = styled.div`
  position: relative;
  width: 300px;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  cursor: pointer;
  width: 18.75rem;
  height: 25rem;
  background-size: cover;
  background-position: center;
  border-radius: 0.625rem;
  position: absolute;
  transition:
    transform 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.$position === "center" ? 1 : 0.6)};
  overflow: hidden;
  ${(props) =>
    props.$position === "center" &&
    `
    transform: translateX(0) scale(1.2);
    z-index: 1;

  `}
  ${(props) =>
    props.$position === "left" &&
    `
    transform: perspective(1000px) translateX(-300px) rotateY(30deg) scale(0.8);
    z-index: 0;
  `}
  ${(props) =>
    props.$position === "right" &&
    `
    transform: perspective(1000px) translateX(300px) rotateY(-30deg) scale(0.8);
    z-index: 0;
  `}

  @media (max-width: ${breakpointMd}) {
    width: 250px;
    height: 350px;

    ${(props) =>
      props.$position === "left" &&
      `
      transform: translateX(-250px) rotateY(30deg) scale(0.8);
    `}
    ${(props) =>
      props.$position === "right" &&
      `
      transform: translateX(250px) rotateY(-30deg) scale(0.8);
    `}
  }

  @media (max-width: ${breakpointXxl}) {
    width: 250px;
    height: 370px;
  }

  @media (max-width: ${breakpointXs}) {
    width: 200px;
    height: 300px;

    ${(props) =>
      props.$position === "left" &&
      `
      transform: translateX(-200px) rotateY(30deg) scale(0.8);
    `}
    ${(props) =>
      props.$position === "right" &&
      `
      transform: translateX(200px) rotateY(-30deg) scale(0.8);
    `}
  }
`;

export const CardContent = styled.div`
  position: absolute;
  bottom: 2.5%;
  left: 50%;
  padding: 0.6rem 0;
  color: #fff;
  transform: translateX(-50%);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95),
    rgba(245, 245, 245, 0.95)
  );
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;
  width: 90%;
  max-width: 400px;
  user-select: none;
  border: 1px solid var(--primary-color);
  p,
  span {
    margin: 0;
    padding: 0;
  }
`;

export const ContentWrapper = styled.div`
  text-align: center;
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
`;

export const Category = styled.p`
  color: var(--primary-color-dark-3);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: var(--font-size-body);
  font-weight: 800;
  font-family: var(--font-tertiary);
`;
export const InfoPrice = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ProductTitle = styled(Heading).attrs({ as: "h4" })`
  margin-bottom: 0rem;
  font-size: var(--font-size-small);
  margin-top: 0;
  color: black;
  font-weight: 800;
`;
export const Price = styled.span`
  display: block;
  font-weight: 800;
  color: black;
  font-weight: 700;
  font-size: var(--font-size-small);
  letter-spacing: 0.5px;
`;

export const CircularButtonContainer = styled.div`
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
`;

export const CircularButton = styled.button`
  background: var(--primary-color);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  svg {
    color: white;
    font-size: 1.5rem;
    @media (max-width: ${breakpointXs}) {
      font-size: 1rem;
    }
  }

  &:hover {
    background: var(--primary-color-dark-2);
  }
  @media (max-width: ${breakpointXs}) {
    width: 35px;
    height: 35px;
  }
`;
