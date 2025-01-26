import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: ${(props) =>
    props.$customStyles.backgroundColor || "var(--primary-color-dark-3)"};
  color: ${(props) => props.$customStyles.color || "#fff"};
  border: ${(props) => props.$customStyles.border || "none"};
  border-radius: ${(props) =>
    props.$customStyles.borderRadius || "var(--border-radius-medium)"};
  cursor: pointer;
  font-size: ${(props) => props.size || "var(--font-size-button)"};
  transition: all var(--transition-quick);
  width: 100%;

  svg {
    transition: transform var(--transition-quick);
    ${(props) =>
      props.$isactive &&
      `
      transform: rotate(-180deg);
    `}
  }
`;

export const List = styled.ul`
  position: absolute;
  top: 100%;
  ${(props) => (props.$position === "right" ? "right: 0;" : "left: 0;")}
  background: white;
  border: 1px solid var(--primary-color-dark-4);
  box-shadow: var(--shadow-medium);
  z-index: 1000;
  padding: 0;
  margin: 0;
  list-style: none;
  overflow-y: auto;
  max-width: 100vw;
  margin-top: 0.2rem;
`;

export const Item = styled.li`
  padding: 0 var(--spacing-md);
  height: 55px;
  cursor: pointer;
  border-radius: var(--border-radius-small);
  display: flex;
  align-items: center;
  background: #fff;
  transition: background var(--transition-quick);
  white-space: nowrap;

  &:hover {
    background: var(--light-grey-color);
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: ${(props) => props.width || "100%"};
`;
