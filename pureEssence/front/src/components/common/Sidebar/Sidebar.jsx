import { useState, useContext, createContext, cloneElement } from "react";
import { createPortal } from "react-dom";
import { CloseButton, StyledOverlay, StyledSidebar } from "./Sidebar.styles";

// Create a context for the sidebar
export const SidebarContext = createContext();

// Sidebar Provider to manage state
export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState("");
  const [isClosing, setisClosing] = useState(false);
  const [position, setPosition] = useState("left");

  const closeSidebar = () => {
    setisClosing(true);
    setTimeout(() => {
      setIsOpen("");
      setisClosing(false);
    }, 500); // Duration of the closing animation
  };

  const openSidebar = (name, pos = "left") => {
    setPosition(pos);
    setIsOpen(name);
    setisClosing(false);
  };

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        openSidebar,
        closeSidebar,
        isClosing,
        position,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

// Sidebar Trigger Component
const SidebarTrigger = ({ children, opens, position }) => {
  const { openSidebar } = useContext(SidebarContext);
  return cloneElement(children, {
    onClick: () => openSidebar(opens, position),
  });
};

// Sidebar Content Component
// Sidebar Content Component
const SidebarContent = ({ children, name }) => {
  const { isOpen, closeSidebar, isClosing, position } =
    useContext(SidebarContext);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeSidebar();
    }
  };

  const shouldRender = name === isOpen || isClosing;

  if (!shouldRender) return null;

  return createPortal(
    <StyledOverlay onClick={handleOverlayClick}>
      <CloseButton
        onClick={closeSidebar}
        $position={position}
        $isClosing={isClosing}
      >
        <span className="inner">
          <span className="label">Close</span>
        </span>
      </CloseButton>

      <StyledSidebar $isClosing={isClosing} $position={position}>
        <div>{children}</div>
      </StyledSidebar>
    </StyledOverlay>,
    document.body
  );
};
// Attach components to Sidebar object
const Sidebar = {
  Provider: SidebarProvider,
  Trigger: SidebarTrigger,
  Content: SidebarContent,
};

export default Sidebar;
