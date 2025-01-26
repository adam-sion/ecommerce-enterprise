import React, { createContext, useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { doorClose, doorOpen } from "../../utils/Animations/animations";

const MenuItemWrapper = styled.div`
  position: relative;
  cursor: pointer;
  perspective: 1000px;
`;

const MenuItemContainer = styled.li`
  position: relative;
`;

const HoverArea = styled.div`
  z-index: 50;
  position: absolute;
  top: 100%;
  left: 0;
  width: 200%;
  height: 220px;
`;

const DropdownContainer = styled.div`
  z-index: 150;
  transform-style: preserve-3d;
  position: absolute;
  top: 220%;
  left: 0;
  display: flex;
  background: #fff;
  border-top: 4px solid var(--primary-color);
  padding: 2rem 1.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  min-width: ${({ $minWidth }) => $minWidth || "200px"};
  width: 100%;
  justify-content: space-around;
  border-radius: 0 0 15px 15px;
  animation: ${doorOpen} 0.3s ease-in-out;

  &.exit {
    animation: ${doorClose} 0.3s ease-in-out;
  }
`;

// Create a context for the dropdown state
const DropdownContext = createContext();

export const MenuItem = ({ children, label }) => {
  const [open, setOpen] = useState(false);

  return (
    <MenuItemWrapper
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <MenuItemContainer>{label}</MenuItemContainer>
      <DropdownContext.Provider value={{ open, setOpen }}>
        {open && <HoverArea />}
        {/* Render HoverArea only when the dropdown is open */}
        {children}
      </DropdownContext.Provider>
    </MenuItemWrapper>
  );
};

export const Dropdown = ({ children, minWidth }) => {
  const { open, setOpen } = useContext(DropdownContext);
  const [showDropdown, setShowDropdown] = useState(open);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (open) {
      setShowDropdown(true);
      setIsExiting(false);
    } else if (!open && showDropdown) {
      setIsExiting(true);
      const timer = setTimeout(() => {
        setShowDropdown(false);
        setIsExiting(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [open, showDropdown]);

  if (!showDropdown && !isExiting) return null;

  const handleItemClick = () => {
    setOpen(false); // Close the dropdown
  };

  // Clone each child and inject the onClick handler
  const enhancedChildren = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      onClick: handleItemClick,
    })
  );

  return (
    <DropdownContainer
      $minWidth={minWidth}
      className={isExiting ? "exit" : "enter"}
    >
      {enhancedChildren}
    </DropdownContainer>
  );
};
