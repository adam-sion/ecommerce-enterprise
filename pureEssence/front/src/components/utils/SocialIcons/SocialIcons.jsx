import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import styled from "styled-components";
const SocialIcons = () => {
  return (
    <SocialIconsContainer>
      <SocialIcon href="#">
        <FaFacebook />
      </SocialIcon>
      <SocialIcon href="#">
        <FaTwitter />
      </SocialIcon>
      <SocialIcon href="#">
        <FaInstagram />
      </SocialIcon>
      <SocialIcon href="#">
        <FaPinterest />
      </SocialIcon>
    </SocialIconsContainer>
  );
};

export default SocialIcons;

const SocialIconsContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const SocialIcon = styled.a`
  color: #000;
  font-size: var(--font-size-h6);
  margin-right: 10px;
  transition: color 0.3s ease;
  &:hover {
    color: var(--primary-color);
  }
`;
