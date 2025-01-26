import styled, { css } from "styled-components";
import { zoomIn, zoomOut } from "../Animations/animations";

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  @media (max-width: 680px) {
    overflow-y: auto;
  }
`;

export const StyledModal = styled.div`
  background: white;
  border-radius: 8px;
  position: relative;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  animation: ${({ $isClosing }) =>
    $isClosing
      ? css`
          ${zoomOut} 0.5s ease-in-out
        `
      : css`
          ${zoomIn} 0.5s ease-in-out
        `};
  @media (max-width: 680px) {
    max-height: 95%;
    max-width: 95%;
  }
`;
