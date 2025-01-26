import { useState, cloneElement, useContext, createContext } from "react";
import { createPortal } from "react-dom";
import { StyledModal, StyledOverlay } from "./Modal.styles";
import { CloseButton } from "../CloseButton/CloseButton";

export const ModalContext = createContext();

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState("");
  const [$isClosing, set$isClosing] = useState(false);

  const closeModal = () => {
    set$isClosing(true);
    setTimeout(() => {
      setIsOpen("");
      set$isClosing(false);
    }, 500); // Duration of the closing animation
  };

  const openModal = (name) => {
    setIsOpen(name);
    set$isClosing(false);
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, $isClosing }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const ModalTrigger = ({ children, opens }) => {
  const { openModal } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => openModal(opens) });
};

const ModalContent = ({ children, name }) => {
  const { isOpen, closeModal, $isClosing } = useContext(ModalContext);
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (name !== isOpen && !$isClosing) return null;

  return createPortal(
    <StyledOverlay onClick={handleOverlayClick}>
      <StyledModal $isClosing={$isClosing}>
        <CloseButton onClick={closeModal}>
          <span className="inner">
            <span className="label">Close</span>
          </span>
        </CloseButton>
        <div>{children}</div>
      </StyledModal>
    </StyledOverlay>,
    document.body
  );
};

Modal.Trigger = ModalTrigger;
Modal.Content = ModalContent;

export default Modal;
