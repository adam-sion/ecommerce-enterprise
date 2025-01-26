import styled, { keyframes } from "styled-components";
import Arrow from "../../../assets/icons/arrow-up.svg?react";
import { Link } from "react-router-dom";
// Keyframe animation for rotating text
const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Styled components
const Container = styled.div`
  position: relative;
  width: 9rem;
  height: 9rem;
  margin: 0;
  margin: 1.5rem auto;
  @media (max-width: 580px) {
    display: none;
  }
`;

const Circle = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;

  svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    animation: ${rotate} 15s linear infinite;
  }

  text {
    font-family: var(--font-primary);
    ${({ $textSize }) => $textSize && `font-size: ${$textSize};`}
  }
`;

const Icon = styled.div`
  svg {
    width: 5rem;
    height: 5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition: transform 0.5s;

    path {
      stroke: #996d75;
      transition: stroke 0.5s;
    }
  }

  :hover {
    svg {
      transform: translate(-50%, -50%) rotate(30deg);
    }

    path {
      stroke: black;
    }
  }
`;

const RotatingText = ({ textInput, textSize, linkTo }) => {
  const text = textInput;

  return (
    <Link to={linkTo}>
      <Container>
        <Circle $textSize={textSize}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <g>
              <use xlinkHref="#circlePath" fill="none" />
              <text fill="#000">
                <textPath xlinkHref="#circlePath">{text}</textPath>
              </text>
            </g>
          </svg>
        </Circle>
        <Icon>
          <Arrow />
        </Icon>
      </Container>
    </Link>
  );
};

export default RotatingText;
