import styled, { css } from "styled-components";

// Keyframe for active state animation
const activeAnimation = css`
  @keyframes activeEffect {
    0% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }

  animation: activeEffect 0.2s ease-out forwards;
`;

// Base Button Styles
const Button = styled.button`
  font-family: var(--font-secondary);
  font-weight: 700;
  color: ${(props) =>
    props.$invert ? props.color || "var(--primary-color-dark-3)" : "#fff"};
  background: ${(props) =>
    props.$invert ? "transparent" : `${props.color || "black"}`};

  padding: 0;
  font-weight: 500;
  cursor: pointer;
  transition:
    color 0.3s ease,
    background 0.3s ease,
    border 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border: none;
  z-index: 1;

  &:before,
  &:after {
    position: absolute;
    content: "";
    background: ${(props) => props.color || "var(--primary-color-dark-3)"};
    transition: all 0.3s ease;
  }

  &:before {
    height: ${(props) => (props.$invert ? "100%" : "0%")};
    width: 2px;
    right: 0;
    top: 0;
  }

  &:after {
    width: ${(props) => (props.$invert ? "100%" : "0%")};
    height: 2px;
    right: 0;
    top: 0;
  }

  &:hover {
    background: ${(props) =>
      props.$invert ? props.color || "black" : "transparent"};

    &:before {
      height: ${(props) => (props.$invert ? "0%" : "100%")};
    }

    &:after {
      width: ${(props) => (props.$invert ? "0%" : "100%")};
    }

    span {
      color: ${(props) =>
        props.$invert ? "#fff" : props.color || "var(--primary-color-dark-3)"};

      &:before {
        height: ${(props) => (props.$invert ? "0%" : "100%")};
      }

      &:after {
        width: ${(props) => (props.$invert ? "0%" : "100%")};
      }
      svg {
        color: inherit;
        &:before {
          height: inherit;
        }
        &:after {
          width: inherit;
        }
      }
    }
  }

  // Prevent color change on focus
  &:focus {
    /* outline: none; */
    background: ${(props) =>
      props.$invert ? "transparent" : `${props.color || "black"}`};

    // Add focus animation
    transform: scale(1.01);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    outline: none;
    border: none;
    span {
      font-weight: 700;
      color: ${(props) =>
        props.$invert ? props.color || "var(--primary-color-dark-3)" : "#fff"};
    }
  }

  // Active state animation
  &:active {
    ${activeAnimation}
  }

  span {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1.1rem;
    font-size: var(--font-size-h5);
    transition: color 0.3s ease;
    color: ${(props) => props.$textcolor || "inherit"};
    &:before,
    &:after {
      position: absolute;
      content: "";
      background: ${(props) => props.color || "var(--primary-color-dark-3)"};
      transition: all 0.3s ease;
    }

    &:before {
      width: 2px;
      height: ${(props) => (props.$invert ? "100%" : "0%")};
      left: 0;
      bottom: 0;
    }

    &:after {
      width: ${(props) => (props.$invert ? "100%" : "0%")};
      height: 2px;
      left: 0;
      bottom: 0;
    }
  }

  // Responsive adjustments for small screens
  @media (max-width: 600px) {
    font-size: var(--font-size-body);
    span {
      padding: 0.4rem 0.8rem;
      font-size: var(--font-size-body);
    }

    &:hover {
      transform: scale(1.01);
    }
  }
`;

// Different Button Variants
const BigButton = styled(Button)`
  span {
    padding: 1rem 2rem;
    font-size: var(--font-size-h4);
  }
`;

const MediumButton = styled(Button)`
  span {
    padding: 0.75rem 1.5rem;
    font-size: var(--font-size-h5);
  }
`;

const SmallButton = styled(Button)`
  span {
    padding: 0.6rem 0.9rem;
    font-size: var(--font-size-h6);
  }
`;

const ExtraSmallButton = styled(Button)`
  span {
    padding: 0.4rem 0.8rem;
    font-size: var(--font-size-h6);
  }
`;

const MiniButton = styled(Button)`
  span {
    padding: 0.3rem 0.6rem;
    font-size: var(--font-size-body);
  }
`;

// Component CustomButton
const CustomButton = ({
  size,
  color,
  children,
  onClick,
  $invert,
  textcolor,
  type,
  active
}) => {
  let ButtonVariant = Button;

  switch (size) {
    case "big":
      ButtonVariant = BigButton;
      break;
    case "medium":
      ButtonVariant = MediumButton;
      break;
    case "small":
      ButtonVariant = SmallButton;
      break;
    case "extra-small":
      ButtonVariant = ExtraSmallButton;
      break;
    case "mini":
      ButtonVariant = MiniButton;
      break;
    default:
      break;
  }

  return (
    <ButtonVariant
    disabled={!active}
    type={type}
      color={color}
      onClick={onClick}
      $invert={$invert}
      $textcolor={textcolor}
    >
      <span>{children}</span>
    </ButtonVariant>
  );
};

export default CustomButton;

// Example of use
{
  /* 
<CustomButton size="big" color="#FF5733" $invert={true}>Big Button</CustomButton> 
<CustomButton size="medium" color="#33FF57">Medium Button</CustomButton>
<CustomButton size="small" color="#3357FF" $invert={true}>Small Button</CustomButton>
<CustomButton size="extra-small" color="#F3FF33">Extra Small Button</CustomButton>
*/
}
