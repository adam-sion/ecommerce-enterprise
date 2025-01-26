import styled from "styled-components";
import Heading from "../../utils/Heading/heading";
import {
  move1,
  slideInDown,
  slideInUp,
} from "../../utils/Animations/animations";
import textureBackground from "../../../assets/img/background/background-primary.png";

// Main container for the FAQ section
export const FAQSectionContainer = styled.section`
  display: flex;
  background:
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.9),
      rgba(240, 240, 240, 0.9)
    ),
    url(${textureBackground}) no-repeat center/cover;
  padding: var(--spacing-md);
  position: relative;
  overflow: hidden;

  & > div:first-child {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
    z-index: 1;

    @media (max-width: 960px) {
      flex-direction: column;
      height: auto;
      width: 95%;
      row-gap: 0.5rem;
      margin-top: 0.5rem;
    }
  }

  &.faq-section-hidden {
    opacity: 0;
    transform: translateY(20px);
  }
  &.faq-section-visible {
    animation: ${slideInUp} 0.8s ease-in-out forwards;
  }
`;

export const FAQTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 45%;
  margin-top: 10rem;

  @media (max-width: 960px) {
    margin-top: 1rem;
    width: 90%;
  }
`;

export const Highlight = styled(Heading).attrs({ as: "h2" })`
  position: relative;
  color: var(--primary-color);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  &::after {
    content: "";
    display: block;
    width: 9.375rem;
    height: 4px;
    background-color: var(--primary-color);
    margin: 0.1rem auto;
  }
`;

export const AccordionContainer = styled.div`
  width: 50%;
  padding: var(--spacing-md);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;

  &.animating {
    opacity: 0;
    transform: translateY(15px);
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const AccordionItem = styled.div`
  border-radius: var(--border-radius-medium);
  overflow: hidden;
`;

export const AccordionItemButton = styled.div`
  font-family: var(--font-secondary);
  background: ${(props) =>
    props.$isExpanded
      ? "linear-gradient(135deg, var(--primary-color-dark-4) 0%, var(--primary-color-dark-4) 100%)"
      : "var(--background-color)"};

  color: ${(props) => (props.$isExpanded ? "#fff" : "var(--dark-grey-color)")};
  padding: var(--spacing-md);
  font-size: var(--font-size-body);
  border: 1px solid var(--light-grey-color);
  border-radius: var(--border-radius-medium);
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color var(--transition-quick);
  box-shadow: ${(props) =>
    props.$isExpanded ? "0 2px 5px rgba(0, 0, 0, 0.1)" : "none"};

  &:hover {
    background-color: var(--primary-color-dark-4);
    color: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const AccordionItemPanel = styled.div`
  padding: ${(props) =>
    props.$isExpanded ? "var(--spacing-md)" : "0 var(--spacing-md)"};
  max-height: ${(props) => (props.$isExpanded ? "2000px" : "0")};
  overflow: hidden;
  transition:
    max-height var(--transition-quick),
    padding var(--transition-quick);
  border-top: none;

  // Apply the animation only when the panel is expanded
  animation: ${(props) => (props.$isExpanded ? slideInDown : "none")} 0.5s
    ease-in-out;
  opacity: ${(props) => (props.$isExpanded ? "1" : "0")};
`;

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) =>
    props.$isExpanded ? "var(--secondary-color)" : "var(--light-grey-color)"};
  border-radius: 50%;
  margin-right: var(--spacing-sm);
  transition: background-color var(--transition-quick);
  flex-shrink: 0;

  @media (max-width: 960px) {
    width: 15px;
    height: 15px;
  }
`;

export const Separator = styled.div`
  height: 1px;
  background-color: var(--light-grey-color);
  margin: var(--spacing-sm) 0;
`;
// First animated circle
export const AnimatedCircle1 = styled.div`
  width: 17rem;
  height: 17rem;
  background-color: color-mix(
    in srgb,
    var(--primary-color-light-3) 30%,
    transparent
  );

  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 20px;
  animation: ${move1} 5s infinite alternate;
  margin: 15rem;
`;

// Second animated circle
export const AnimatedCircle2 = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: color-mix(
    in srgb,
    var(--primary-color-light-3) 30%,
    transparent
  );
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 35%;
  animation: ${move1} 5s infinite alternate;
  margin: 5rem;
`;
export const Question = styled.p`
  font-size: var(--font-size-h6);
  font-family: var(--font-primary);
  font-weight: 400;
`;
export const TopicList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
  & > * {
    flex: 1;
  }
`;

export const TopicItem = styled.li`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: ${(props) =>
    props.$isSelected
      ? "var(--primary-color-dark-4)"
      : "var(--background-color)"};
  color: ${(props) => (props.$isSelected ? "#fff" : "var(--dark-grey-color)")};
  border-radius: var(--border-radius-medium);
  cursor: pointer;
  transition:
    background-color var(--transition-quick),
    color var(--transition-quick);
  font-family: var(--font-secondary);
  font-size: var(--font-size-body);
  text-align: left;
  &:hover {
    background-color: var(--primary-color-dark-3);
    color: #fff;
  }

  @media (max-width: 960px) {
    font-size: var(--font-size-small);
    padding: var(--spacing-xs) var(--spacing-sm);
  }
`;
