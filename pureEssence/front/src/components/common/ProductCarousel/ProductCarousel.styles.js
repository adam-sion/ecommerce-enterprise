import styled from "styled-components";

export const Section = styled.section`
  text-align: center;
  padding: ${({ $paddingY }) => $paddingY} 0.5rem;
  background-color: white;
`;

export const Price = styled.p`
  font-size: var(--font-size-h5);
  font-weight: bold;
  color: var(--primary-color-dark-5);
  font-family: var(--font-primary);
  margin-bottom: 1rem;
`;

export const SvgBtnContainer = styled.div`
  svg {
    display: flex;
    fill: white;
  }
`;
