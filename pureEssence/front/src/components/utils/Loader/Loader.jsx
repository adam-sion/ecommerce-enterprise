import styled, { keyframes } from "styled-components";

// Keyframe for the flip animation
const flip = keyframes`
  0%, 80% {
    transform: rotateY(360deg);
  }
`;

// Keyframe for the gradient animation
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Styled component for the loader container
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(
    45deg,
    var(--primary-color-light-5),
    var(--secondary-color),
    var(--primary-color-dark-1)
  );
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
`;

// Styled component for the loading text
const LoadingText = styled.div`
  display: flex;
  position: relative;

  span {
    position: relative;
    display: inline-block;
    font-size: 3rem;
    font-family: var(--font-primary);
    color: var(--background-color);
    text-transform: uppercase;
    animation: ${flip} 2s infinite;
    animation-delay: calc(0.2s * var(--i));
  }
`;

// React loader component
const Loader = () => {
  return (
    <LoaderContainer>
      <LoadingText className="waviy">
        <span style={{ "--i": 1 }}>L</span>
        <span style={{ "--i": 2 }}>o</span>
        <span style={{ "--i": 3 }}>a</span>
        <span style={{ "--i": 4 }}>d</span>
        <span style={{ "--i": 5 }}>i</span>
        <span style={{ "--i": 6 }}>n</span>
        <span style={{ "--i": 7 }}>g</span>
        <span style={{ "--i": 8 }}>.</span>
      </LoadingText>
    </LoaderContainer>
  );
};

export default Loader;
