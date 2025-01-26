import styled from "styled-components";
import Heading from "../../utils/Heading/heading";
import { Link } from "react-router-dom";
import { Splide } from "@splidejs/react-splide";

export const Section = styled.section`
  position: relative;
  padding: 2rem 0;
  margin: 4rem auto 1rem;
  text-align: center;
  background-color: var(--background-color);

  @media (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export const Content = styled.div`
  position: relative;
  max-width: 90%;

  margin: auto;
  h4 {
    margin-bottom: var(--spacing-xxxl);
    @media (max-width: 768px) {
      margin-bottom: var(--spacing-xxl);
    }
    @media (max-width: 768px) {
      margin-bottom: var(--spacing-xl);
    }
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  position: relative;
`;

export const Card = styled.div`
  position: relative;
  width: 21rem;
  height: 21rem;

  padding: 1rem;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-5px);
  border: 5px solid rgba(255, 255, 255, 0.4);
  margin: 0.5rem auto; /* Center the card horizontally */
  &.skincare {
    background: linear-gradient(135deg, #ffb7c3, #ffc5cf);
  }

  &.haircare {
    background: linear-gradient(135deg, #76f4e7, #ccf5f2);
  }

  &.makeup {
    background: linear-gradient(135deg, #f96167, #fa8185);
  }

  &.wellness {
    background: linear-gradient(135deg, #5c4146, #7a575e);
  }

  &:hover {
    transform: scale(1.05);

    img {
      transform: scale(1.1);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
    transition: opacity 0.4s ease;
    opacity: 1;
    z-index: 2;
  }
  @media (max-width: 768px) {
    width: 18rem;
    height: 18rem;
  }
  @media (max-width: 480px) {
    width: 15rem;
    height: 15rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  z-index: 2;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const Image = styled.img`
  width: 80%;
  transform: scale(1.1);
  z-index: 2;
  filter: drop-shadow(18.5938px 2px 4.8px rgba(0, 0, 0, 0.4))
    drop-shadow(19.9219px 4.1778px 155px rgba(0, 0, 0, 0.1));
`;

export const Name = styled(Heading).attrs({ as: "h4" })`
  transform: rotate(5deg);
  letter-spacing: 1.1px;
  text-shadow:
    rgb(0, 0, 0) 18.5938px 13.2326px 2.8px,
    rgba(0, 0, 0, 0.901961) 19.9219px 14.1778px 35px;
`;
//
export const CarouselWrapper = styled(Splide)`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  .splide__slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SlideCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
