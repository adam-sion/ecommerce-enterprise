import styled from "styled-components";
import {
  doorClose,
  doorOpen,
  zoomOut,
} from "../../utils/Animations/animations";

// Styled Components for Sidebar
const widthSidebar = "350px";
export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  perspective: 1000px;
`;

export const StyledSidebar = styled.div`
  overflow-y: auto;
  position: fixed;
  width: ${widthSidebar};
  top: 0;
  ${(props) => (props.$position === "left" ? "left: 0;" : "right: 0;")}
  height: 100%;
  background-color: white;
  box-shadow: ${(props) =>
    props.$position === "left"
      ? "2px 0 5px rgba(0, 0, 0, 0.3)"
      : "-2px 0 5px rgba(0, 0, 0, 0.3)"};
  transform: ${(props) =>
    props.$isClosing
      ? props.$position === "left"
        ? "translateX(-100%)"
        : "translateX(100%)"
      : "translateX(0)"};
  animation: ${(props) => (props.$isClosing ? doorClose : doorOpen)} 0.5s
    forwards;
  transform-origin: ${(props) =>
    props.$position === "left" ? "left center" : "right center"};
  z-index: 1000;
  transition: transform 0.5s ease-in-out;
  transform-style: preserve-3d;
  @media (max-width: 420px) {
    width: calc(100% - 52px);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -0px;
  ${(props) => (props.$position === "left" ? "left: 350px;" : "right: 350px;")}
  background: none;
  border: none;
  cursor: pointer;
  background-color: black;
  padding: 0;
  color: white;
  transition: transform 0.5s ease;
  z-index: 1;
  animation: ${(props) => (props.$isClosing ? zoomOut : doorOpen)} 0.5s forwards;
  @media (max-width: 420px) {
    ${(props) =>
      props.$position === "left"
        ? "left: calc(100% - 52px);"
        : "right: calc(100% - 52px);"}
  }
  .inner {
    display: block;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    &:before {
      content: "";
      position: absolute;
      height: 2px;
      width: 25px;
      background-color: #fff;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
      transition: ease-out 0.2s all;
    }
    &:after {
      content: "";
      position: absolute;
      height: 2px;
      width: 25px;
      background-color: #fff;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      transition: ease-out 0.2s all;
    }
  }
  .label {
    color: #fff;
    opacity: 0;
    transition: all 0.2s ease-out;
    font-size: 0.8rem;
    padding: 1rem 0.5rem;
  }
  &:hover,
  &:focus {
    .inner {
      &:before {
        transform: translate(-50%, 0%) rotate(0);
        top: 25%;
      }
      &:after {
        transform: translate(-50%, 0%) rotate(0);
        top: 72%;
      }
    }
    .label {
      opacity: 1;
    }
  }
`;
