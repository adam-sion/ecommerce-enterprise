import styled, { css } from "styled-components";

export const sizes = {
  small: {
    button: "var(--font-size-h5)",
    fontSize: "var(--font-size-body)",
    iconSize: "var(--font-size-body)",
  },
  normal: {
    button: "var(--font-size-h4)",
    fontSize: "var(--font-size-h6)",
    iconSize: "var(--font-size-h6)",
  },
};

export const Button = styled.button`
  ${({ size, $color }) => css`
    width: ${sizes[size].button};
    height: ${sizes[size].button};
    border: none;
    background-color: ${$color || "var(--primary-color-dark-1)"};
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;
    padding: 1.1rem;
    &:hover {
      background-color: ${$color ? $color : "var(--primary-color-dark-2)"};
    }
    svg {
      display: flex;
    }
  `}
`;

export const Display = styled.div`
  ${({ size, $color }) => css`
    width: calc(${sizes[size].button});
    height: ${sizes[size].button};
    border: 1px solid ${$color ? $color : "var(--primary-color-dark-2)"};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${sizes[size].fontSize};
    border-radius: 15rem;
    margin: 0 10px;
    padding: 1.1rem;
  `}
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  ${({ size }) => css`
    font-size: ${sizes[size].iconSize};
  `}
`;
