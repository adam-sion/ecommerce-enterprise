import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Button = styled.div`
  height: 3rem;
  width: 3rem;
  margin: 0 5px;
  overflow: hidden;
  background: #fff;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &:hover {
    width: 10.5rem;
  }
  &:hover span {
    display: block;
  }
  &:hover svg {
    color: #fff;
  }
`;

const Icon = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  border-radius: 50px;
  transition:
    background 0.3s ease-out,
    color 0.3s ease-out;

  ${Button}:nth-child(1):hover & {
    background: #4267b2;
  }

  ${Button}:nth-child(2):hover & {
    background: black;
    color: black;
  }

  ${Button}:nth-child(3):hover & {
    background: #e1306c;
  }

  svg {
    font-size: 25px;
    color: var(--accent-color);
    transition: color 0.3s ease-out;
  }
`;

const Label = styled.span`
  font-size: var(--font-size-body);
  font-weight: 500;
  line-height: 60px;
  margin-right: 1.1rem;
  transition: color 0.3s ease-out;
  display: none;
  ${Button}:nth-child(1) & {
    color: #4267b2;
  }

  ${Button}:nth-child(2) & {
    color: black;
  }

  ${Button}:nth-child(3) & {
    color: #e1306c;
  }
`;

const ShareSocialMediaIcons = () => {
  return (
    <Wrapper>
      <Button>
        <Icon>
          <FaFacebookF size="1.3rem" />
        </Icon>
        <Label>Facebook</Label>
      </Button>
      <Button>
        <Icon>
          <RiTwitterXFill size="1.3rem" />
        </Icon>
        <Label>Twitter</Label>
      </Button>
      <Button>
        <Icon>
          <FaInstagram size="1.3rem" />
        </Icon>
        <Label>Instagram</Label>
      </Button>
    </Wrapper>
  );
};

export default ShareSocialMediaIcons;
