import styled, { keyframes } from "styled-components";
import textureBackground from "../../../assets/img/background/background-grey.png";

export const TestimonialSection = styled.section`
  display: flex;
  height: 80vh;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  position: relative;
  background: url(${textureBackground});
  overflow: hidden;
  min-height: 100vh;
  @media (max-width: 1080px) {
    flex-direction: column;
    height: auto;
  }
`;

export const CarouselWrapper = styled.div`
  margin-top: 2rem;
  .splide__list {
    margin-bottom: 1.4rem !important;
  }
  .splide__pagination {
    display: flex;
    justify-content: center;
    gap: 10px;
    bottom: -2rem;
  }

  .splide__pagination__page {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: black;
    cursor: pointer;
    transition:
      background 0.3s,
      transform 0.3s;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: -5px;
      left: -5px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: var(--accent-color);
      opacity: 0;
      transform: scale(0.5);
      transition:
        opacity 0.3s,
        transform 0.3s;
    }
    &:focus {
      outline: none;
    }
    &.is-active {
      background: white;
      &:before {
        opacity: 0.3;
        transform: scale(1);
      }
    }
  }

  .splide__arrow {
    display: none;
  }

  .splide__slide {
    display: flex;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.5s;
    &.is-active {
      opacity: 1;
    }
  }
`;

export const CarouselTextContainer = styled.div`
  background: linear-gradient(135deg, #f0f0f0, #ffffff);
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  margin: auto;
  padding: 30px 40px;
  border: 1px solid var(--primary-color);
`;

export const TestimonialText = styled.p`
  position: relative;
  font-style: italic;
  color: var(--dark-grey-color);
  max-width: 600px;
  margin: var(--spacing-lg) auto;
  font-size: var(--font-size-h4);
  line-height: 1.8;
  text-align: justify;
  font-family: var(--font-tertiary);

  &:before {
    content: "“";
    font-size: 7rem;
    color: var(--primary-color);
    position: absolute;
    top: 5%;
    left: -6%;
    line-height: 0;
  }
  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 4px;
    background: var(--primary-color);
    margin: 20px auto var(--spacing-lg);
  }

  @media (max-width: 1080px) {
    max-width: auto;
    width: 100%;

    &:before {
      font-size: 3rem;
    }
  }
`;
export const Author = styled.p`
  font-weight: bold;
  margin-top: 0;
  font-size: var(--font-size-h3);
  color: var(--text-color);
  font-family: var(--font-tertiary);
`;

export const ContentWrapper = styled.div`
  width: 50%;
  text-align: center;
  z-index: 1;
  @media (max-width: 1080px) {
    width: 90%;
  }
`;

export const Stars = styled.div`
  margin: 20px 0;
  color: var(--primary-color-dark-5);
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  svg:hover {
    color: var(--primary-color-dark-3);
    transform: scale(1.2);
    transition:
      transform 0.3s,
      color 0.3s;
  }
`;

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const zoomRotateAnimation = keyframes`
  0%, 100% {
    transform: scale(1) rotate(0);
  }
  50% {
    transform: scale(1.1) rotate(10deg);
  }
`;

export const ImageGrid = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;

export const TestimonialImage = styled.img`
  border-radius: 50%;
  border: 3px solid var(--accent-color);
  object-fit: cover;
  position: absolute;
  cursor: pointer;
  ${({ size }) => size && `width: ${size}; height: ${size};`}
  ${({ $top }) => $top && `top: ${$top};`}
  ${({ $left }) => $left && `left: ${$left};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
  ${({ right }) => right && `right: ${right};`}
  animation: ${zoomRotateAnimation} 5s ease-in-out infinite, ${floatAnimation} 5s ease-in-out infinite;
  transform: ${({ $active }) =>
    $active === "true" ? "scale(1.2)" : "scale(1)"};
  filter: ${({ $active }) =>
    $active === "true" ? "brightness(1.1)" : "grayscale(100%)"};
`;
const FloatingParticles = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(20px, 20px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

export const Particles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  div {
    position: absolute;
    background: color-mix(in srgb, var(--primary-color) 30%, transparent);
    background: var(--background-primary-transparent);

    border-radius: 50%;
    animation: ${FloatingParticles} 7s linear infinite;
  }

  div:nth-child(1) {
    width: 50px;
    height: 50px;
    top: 10%;
    left: 20%;
  }

  div:nth-child(2) {
    width: 30px;
    height: 30px;
    top: 30%;
    left: 40%;
  }

  div:nth-child(3) {
    width: 40px;
    height: 40px;
    top: 70%;
    left: 60%;
  }

  div:nth-child(4) {
    width: 20px;
    height: 20px;
    top: 50%;
    left: 80%;
  }

  div:nth-child(5) {
    width: 60px;
    height: 60px;
    top: 80%;
    left: 30%;
  }
`;
