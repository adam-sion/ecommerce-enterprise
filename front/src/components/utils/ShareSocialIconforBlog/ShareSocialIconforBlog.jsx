import { useRef, useState } from "react";
import { PiPinterestLogoBold } from "react-icons/pi";
import { FaSquareShareNodes } from "react-icons/fa6";
import { RiFacebookFill, RiTwitterXFill } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import styled, { css } from "styled-components";
import useClickOutside from "../../../hooks/useClickOutside";
const SocialShare = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: var(--spacing-sm);
  z-index: 2;
`;

const SocialReleaser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: var(--font-size-h3);
    color: var(--primary-color-dark-2);
  }
`;

const SocialContent = styled.div`
  z-index: var(--zindex-tooltip);
  gap: var(--spacing-sm);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: var(--spacing-sm);
  background-color: var(--background-primary-transparent);
  border-radius: var(--border-radius-large);
  opacity: 0;
  transform: perspective(600px) rotateX(-10deg) scale(0.8) translateY(-10px);
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;

  ${({ $visible }) =>
    $visible &&
    css`
      opacity: 1;
      transform: perspective(600px) rotateX(0) scale(1) translateY(0);
    `}
`;

const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem; /* Adjust size for a perfect circle */
  height: 2.5rem; /* Adjust size for a perfect circle */
  border-radius: 50%; /* Ensures the circle shape */
  background-color: var(--primary-color); /* Use your primary color */
  color: var(--background-color); /* Use the background color for the icon */
  transition: all var(--transition-normal);

  &:hover {
    background-color: var(--primary-color-dark-3); /* Darker shade on hover */
    transform: scale(1.1) rotate(5deg); /* Slightly increase size and rotate on hover */
  }
`;
const ShareSocialIconforBlog = ({ id }) => {
  const [socialIconsVisibility, setSocialIconsVisibility] = useState({});
  const socialShareRef = useRef(null);

  const handleToggleIcons = (articleId) => {
    setSocialIconsVisibility((prevState) => ({
      ...prevState,
      [articleId]: !prevState[articleId],
    }));
  };

  const handleClickOutside = () => {
    setSocialIconsVisibility((prevState) => ({
      ...prevState,
      [id]: false,
    }));
  };

  const getSocialIconsVisibility = (articleId) => {
    return socialIconsVisibility[articleId] || false;
  };

  // Use the custom hook to handle clicks outside the component
  useClickOutside(
    socialShareRef,
    handleClickOutside,
    getSocialIconsVisibility(id)
  );

  return (
    <SocialShare ref={socialShareRef}>
      <SocialReleaser onClick={() => handleToggleIcons(id)}>
        <FaSquareShareNodes />
      </SocialReleaser>
      <SocialContent $visible={getSocialIconsVisibility(id)}>
        <Icon>
          <PiPinterestLogoBold size="1.3rem" />
        </Icon>
        <Icon>
          <RiTwitterXFill size="1.3rem" />
        </Icon>
        <Icon>
          <FiInstagram size="1.3rem" />
        </Icon>
        <Icon>
          <RiFacebookFill size="1.3rem" />
        </Icon>
      </SocialContent>
    </SocialShare>
  );
};

export default ShareSocialIconforBlog;
