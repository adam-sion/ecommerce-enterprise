import styled from "styled-components";

export const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  background: none;
  border: none;
  cursor: pointer;
  background-color: black;
  padding: 0;
  color: white;
  transition: transform 0.5s ease;
  z-index: 1;
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

export const CloseButton2 = styled.button`
  position: absolute;
  top: -15px;
  left: -15px;
  z-index: 2;
  width: 30px;
  height: 30px;
  background: none;
  border: 2px solid black;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-out;
  background-color: white;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 80%;
    height: 2px;
    background-color: var(--text-color);
    left: 50%;
    top: 50%;
  }
  &:after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &:hover,
  &:focus {
    transform: rotate(180deg);
    &:before,
    &:after {
      transform: translate(-50%, -50%) rotate(180deg);
    }
  }
`;
