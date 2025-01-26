import { useState, useEffect } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import styled from "styled-components";
const ScrollButton = styled.div`
  position: fixed;
  bottom: var(--spacing-lg);
  right: var(--spacing-lg);
  width: 50px;
  height: 50px;
  background-color: var(--background-primary-transparent);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  z-index: 5;
  transition: background-color var(--transition-quick);
  border: 4px solid var(--primary-color-dark-3);

  &:hover {
    background-color: var(--primary-color-dark-2);
  }
  @media (max-width: 610px) {
    display: none;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--primary-color-dark-2);
  transition: height var(--transition-quick);
`;

const ScrollIcon = styled(MdOutlineKeyboardDoubleArrowUp)`
  color: var(--background-color);
  font-size: 35px;
  position: relative;
  z-index: 5;
`;

const ScrollToTopBtn = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (position / documentHeight) * 100;
    setScrollPosition(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ScrollButton onClick={scrollToTop}>
      <ScrollIndicator style={{ height: `${scrollPosition}%` }} />
      <ScrollIcon />
    </ScrollButton>
  );
};

export default ScrollToTopBtn;
