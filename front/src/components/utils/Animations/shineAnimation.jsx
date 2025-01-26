import styled, { keyframes } from "styled-components";

// Define the keyframes for the shine animation
const shineAnimation = keyframes`
  0% {
    left: -50%;
  }
  100% {
    left: 150%;
  }
`;

// Create the styled component
const Shine = styled.div`
  position: relative;
  overflow: hidden;

  &::before {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    content: "";
    display: block;
    height: 100%;
    left: -50%;
    position: absolute;
    top: 0;
    transform: skewX(-25deg);
    width: 50%;
    z-index: 2;
  }

  &:hover::before,
  &:focus::before {
    animation: ${shineAnimation} 1.2s ease-out forwards; /* Slower animation for subtlety */
  }
`;

export default Shine;
