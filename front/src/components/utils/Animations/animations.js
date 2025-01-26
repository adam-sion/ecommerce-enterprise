// animations.js
import { css, keyframes } from "styled-components";

// Slide In Animations

export const slideInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideInDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Bounce Animations
export const bounceIn = keyframes`
  0%,
  20%,
  40%,
  60%,
  80%,
  100% {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  0% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    transform: scale3d(.9, .9, .9);
  }
  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    transform: scale3d(.97, .97, .97);
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;

export const bounceOut = keyframes`
  20% {
    transform: scale3d(.9, .9, .9);
  }
  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }
  100% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
`;

export const bounceInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  100% {
    transform: none;
  }
`;

export const bounceInRight = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  100% {
    transform: none;
  }
`;

export const bounceInUp = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  100% {
    transform: none;
  }
`;

export const bounceInDown = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  100% {
    transform: none;
  }
`;

export const rotateInDownLeft = keyframes`
  0% {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
  100% {
    transform-origin: left bottom;
    transform: none;
    opacity: 1;
  }
`;

export const rotateInDownRight = keyframes`
  0% {
    transform-origin: left bottom;
    transform: none;
    opacity: 1;
  }
  100% {

    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;

export const rotateInUpLeft = keyframes`
  0% {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
  100% {
    transform-origin: left bottom;
    transform: none;
    opacity: 1;
  }
`;

export const rotateInUpRight = keyframes`
  0% {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }
  100% {
    transform-origin: right bottom;
    transform: none;
    opacity: 1;
  }
`;

// Zoom Animations
export const zoomIn = keyframes`
  0% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
  50% {
    opacity: 1;
  }
`;
export const zoomOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.9);
    opacity: 0;
  }
`;

export const zoomInDown = keyframes`
  0% {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;

export const zoomInLeft = keyframes`
  0% {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;

export const zoomInRight = keyframes`
  0% {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;

export const zoomInUp = keyframes`
  0% {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;

// Flip Animations
export const flip = keyframes`
  0% {
    transform: perspective(400px) rotateY(0);
    animation-timing-function: ease-out;
  }
  40% {
    transform: perspective(400px) rotateY(-180deg);
    animation-timing-function: ease-out;
  }
  60% {
    transform: perspective(400px) rotateY(-180deg);
    animation-timing-function: ease-in;
  }
  100% {
    transform: perspective(400px) rotateY(-360deg);
    animation-timing-function: ease-in;
  }
`;

export const flipInX = keyframes`
  0% {
    transform: perspective(400px) rotateX(90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotateX(-10deg);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  70% {
    transform: perspective(400px) rotateX(10deg);
    animation-timing-function: ease-in;
  }
  100% {
    transform: perspective(400px) rotateX(0);
    animation-timing-function: ease-in;
  }
`;

export const flipInY = keyframes`
  0% {
    transform: perspective(400px) rotateY(90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotateY(-10deg);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  70% {
    transform: perspective(400px) rotateY(10deg);
    animation-timing-function: ease-in;
  }
  100% {
    transform: perspective(400px) rotateY(0);
    animation-timing-function: ease-in;
  }
`;

export const flipOutX = keyframes`
  0% {
    transform: perspective(400px) rotateX(0);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  30% {
    transform: perspective(400px) rotateX(-20deg);
    animation-timing-function: ease-in;
  }
  100% {
    transform: perspective(400px) rotateX(90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
`;

export const flipOutY = keyframes`
  0% {
    transform: perspective(400px) rotateY(0);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  30% {
    transform: perspective(400px) rotateY(-20deg);
    animation-timing-function: ease-in;
  }
  100% {
    transform: perspective(400px) rotateY(90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
`;

// Rotate Animations
export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const rotateIn = keyframes`
  0% {
    transform-origin: center;
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }
  100% {
    transform-origin: center;
    transform: none;
    opacity: 1;
  }
`;

export const rotateOut = keyframes`
  0% {
    transform-origin: center;
    transform: rotate3d(0, 0, 1, 0deg);
    opacity: 1;
  }
  100% {
    transform-origin: center;
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;

// Light Speed Animations
export const lightSpeedInRight = keyframes`
  0% {
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }
  60% {
    transform: skewX(20deg);
    opacity: 1;
  }
  80% {
    transform: skewX(-5deg);
    opacity: 1;
  }
  100% {
    transform: none;
    opacity: 1;
  }
`;

export const lightSpeedOutRight = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
`;

export const lightSpeedInLeft = keyframes`
  0% {
    transform: translate3d(-100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
  60% {
    transform: skewX(-20deg);
    opacity: 1;
  }
  80% {
    transform: skewX(5deg);
    opacity: 1;
  }
  100% {
    transform: none;
    opacity: 1;
  }
`;

export const lightSpeedOutLeft = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    transform: translate3d(-100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }
`;

// Roll Animations
export const rollIn = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

export const rollOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;

// Additional Animations
export const hinge = keyframes`
  0% {
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }
  20%, 60% {
    transform: rotate3d(0, 0, 1, 80deg);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }
  40%, 80% {
    transform: rotate3d(0, 0, 1, 60deg);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;

export const jackInTheBox = keyframes`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }
  50% {
    transform: rotate(-10deg);
  }
  70% {
    transform: rotate(3deg);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;
export const shadowPulse = keyframes`
0% {
  box-shadow: 0 0 10px rgba(255, 183, 195, 0.4);
}
50% {
  box-shadow: 0 0 20px rgba(255, 183, 195, 0.7);
}
100% {
  box-shadow: 0 0 10px rgba(255, 183, 195, 0.4);
}
`;

// Move Objects Animation
export const move1 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(10px, 10px);
  }
  100% {
    transform: translate(0, 0);
  }
`;
export const moveOutLeft = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

// Keyframes for bringing the new image from the right to center
export const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;
// Keyframes for bringing the main image back to the center from the left
export const moveInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Keyframes for moving the thumbnail image back to the right
export const slideOutToRight = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;
export const hoverAnimation = css`
  position: relative;
  z-index: 0;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    background: radial-gradient(
      circle,
      var(--primary-color-dark-5),
      transparent
    );
    transition:
      transform 0.8s ease-out,
      opacity 0.8s ease-out;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    z-index: 0;
    border-radius: 50%;
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }

  svg {
    position: relative;
    z-index: 1;
    transition: color 0.8s ease-out;
  }

  &:hover svg {
    color: white;
  }
`;
export const scaleUp = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const doorOpen = keyframes`
  0% {
    transform: rotateY(90deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    opacity: 1;
  }
`;

export const doorClose = keyframes`
  0% {
    transform: rotateY(0);
    opacity: 1;
  }
  100% {
    transform: rotateY(90deg);
    opacity: 0;
  }
`;
export const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const shrink = keyframes`
  from {
    height: 60px;
  }
  to {
    height: 50px;
  }
`;
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-20px);
  }
`;
export const glow = keyframes` 
  from {
    filter: contrast(190%) brightness(500%);
  }

  to {
    filter: contrast(190%) brightness(130%);
  }
`;
