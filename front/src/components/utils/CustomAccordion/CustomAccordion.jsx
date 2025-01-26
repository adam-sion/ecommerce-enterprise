import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

// Styled Components
const AccordionContainer = styled.div`
  border: 1px solid var(--primary-color);
  overflow: hidden;
  width: 100%;
  margin-bottom: 12px;
  border-radius: 8px;
  transition: border-color 0.3s ease-in-out;
`;

const AccordionHeader = styled.div`
  cursor: pointer;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-color);
  color: #333333;
  font-weight: bold;
  font-size: var(--font-size-h5);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:focus-visible {
    outline: 2px solid #000000;
  }
`;

const AccordionBody = styled.div`
  max-height: ${({ $isOpen }) => ($isOpen ? "800px" : "0")};
  padding: ${({ $isOpen }) => ($isOpen ? "16px 24px" : "0 24px")};
  transition:
    max-height 0.4s ease-in-out,
    padding 0.4s ease-in-out;
  border-top: ${({ $isOpen }) => ($isOpen ? "1px solid #dddddd" : "0")};
  background-color: transparent;
  font-size: var(--font-size-small);
  line-height: 1.6;
`;

const ChevronIcon = styled(FaChevronDown)`
  transition: transform 0.3s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  color: #666666;
`;

// Accordion Components
const CustomAccordion = ({
  children,
  allowMultipleExpanded = false,
  listToExpand = ["0", "1", "2", "3"],
}) => {
  const [expandedItems, setExpandedItems] = useState(listToExpand);

  const toggleItem = (uuid) => {
    if (allowMultipleExpanded) {
      setExpandedItems((prev) =>
        prev.includes(uuid)
          ? prev.filter((item) => item !== uuid)
          : [...prev, uuid]
      );
    } else {
      setExpandedItems((prev) => (prev.includes(uuid) ? [] : [uuid]));
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isOpen: expandedItems.includes(child.props.uuid),
          onToggle: () => toggleItem(child.props.uuid),
        })
      )}
    </div>
  );
};

export const CustomAccordionItem = ({
  isOpen,
  onToggle,
  heading,
  children,
}) => (
  <AccordionContainer>
    <AccordionHeader onClick={onToggle} tabIndex="0">
      {heading}
      <ChevronIcon $isOpen={isOpen} />
    </AccordionHeader>
    <AccordionBody $isOpen={isOpen}>{children}</AccordionBody>
  </AccordionContainer>
);

export default CustomAccordion;
