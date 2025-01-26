import styled, { keyframes } from "styled-components";

const aurora1 = keyframes`
  0% { top: 0; right: 0; }
  50% { top: 100%; right: 75%; }
  75% { top: 100%; right: 25%; }
  100% { top: 0; right: 0; }
`;

const aurora2 = keyframes`
  0% { top: -50%; left: 0%; }
  60% { top: 100%; left: 75%; }
  85% { top: 100%; left: 25%; }
  100% { top: -50%; left: 0%; }
`;

const aurora3 = keyframes`
  0% { bottom: 0; left: 0; }
  40% { bottom: 100%; left: 75%; }
  65% { bottom: 40%; left: 50%; }
  100% { bottom: 0; left: 0; }
`;

const aurora4 = keyframes`
  0% { bottom: -50%; right: 0; }
  50% { bottom: 0%; right: 40%; }
  90% { bottom: 50%; right: 25%; }
  100% { bottom: -50%; right: 0; }
`;

const auroraBorder = keyframes`
  0% { border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%; }
  25% { border-radius: 47% 29% 39% 49% / 61% 19% 66% 26%; }
  50% { border-radius: 57% 23% 47% 72% / 63% 17% 66% 33%; }
  75% { border-radius: 28% 49% 29% 100% / 93% 20% 64% 25%; }
  100% { border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%; }
`;

const Content = styled.div`
  display: grid;
  place-items: center;
  background-color: black;
  color: transparent;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 3rem;
`;

const Title = styled.h1`
  font-size: calc(var(--font-size-h1) + 150%);
  font-weight: 800;
  letter-spacing: clamp(-1.75px, -0.25vw, -3.5px);
  position: relative;
  margin: 0;
  z-index: 1;
  /* Aurora effect mask */
  &::after {
    content: "The Best Natural Beauty Products Here";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-color: white; /* Background color to mask aurora outside text */
    z-index: 2;
    mix-blend-mode: difference; /* Ensures the effect shows only within text */
  }
`;

const Aurora = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

const AuroraItem = styled.div`
  position: absolute;
  width: 60vw;
  height: 60vw;
  border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%;
  filter: blur(1rem);
  mix-blend-mode: overlay;
  animation: ${auroraBorder} 6s ease-in-out infinite;

  &:nth-child(1) {
    background-color: var(--primary-color);
    top: -50%;
    animation:
      ${aurora1} 12s ease-in-out infinite alternate,
      ${auroraBorder} 6s ease-in-out infinite;
  }

  &:nth-child(2) {
    background-color: var(--accent-color);
    right: 0;
    top: 0;
    animation:
      ${aurora2} 12s ease-in-out infinite alternate,
      ${auroraBorder} 6s ease-in-out infinite;
  }

  &:nth-child(3) {
    background-color: var(--secondary-color);
    left: 0;
    bottom: 0;
    animation:
      ${aurora3} 8s ease-in-out infinite alternate,
      ${auroraBorder} 6s ease-in-out infinite;
  }

  &:nth-child(4) {
    background-color: var(--primary-color-dark-6);
    right: 0;
    bottom: -50%;
    animation:
      ${aurora4} 24s ease-in-out infinite alternate,
      ${auroraBorder} 6s ease-in-out infinite;
  }
`;

const AuroraSection = () => (
  <Content>
    <Title>The Best Natural Beauty Products Here</Title>
    <Aurora>
      <AuroraItem />
      <AuroraItem />
      <AuroraItem />
      <AuroraItem />
    </Aurora>
  </Content>
);

export default AuroraSection;
