import { useState, useContext, createContext, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Button, DropdownContainer, Item, List } from "./DropdownBtn.styles";
import useClickOutside from "../../../hooks/useClickOutside";
import { useSelector } from "react-redux";

const DropdownContext = createContext();

const Dropdown = ({
  children,
  width,
  size,
  customStyles = {}, // Default to an empty object if not provided
  onOptionSelect,
  position = "left",
}) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggleMenu = () => setIsActive(!isActive);
  const optionsRef = useRef(null);
  useClickOutside(optionsRef, toggleMenu, isActive);

  const activeFilters = useSelector((state) => state.products.activeFilters);

  useEffect(() => {
    setSelectedOption(null);
  }, [activeFilters]);

  return (
    <DropdownContext.Provider
      value={{
        isActive,
        selectedOption,
        setSelectedOption,
        toggleMenu,
        size,
        customStyles,
        onOptionSelect,
        position,
      }}
    >
      <DropdownContainer width={width} ref={optionsRef}>
        {children}
      </DropdownContainer>
    </DropdownContext.Provider>
  );
};

const DropdownButton = ({ children }) => {
  const { toggleMenu, isActive, size, customStyles } =
    useContext(DropdownContext);

  return (
    <Button
      onClick={toggleMenu}
      $isactive={isActive}
      size={size}
      $customStyles={customStyles}
    >
      {children}
      <IoIosArrowDown />
    </Button>
  );
};

const DropdownList = ({ data, render }) => {
  const { isActive, position } = useContext(DropdownContext);
  return isActive ? <List $position={position}>{data.map(render)}</List> : null;
};

const DropdownItem = ({ children, value }) => {
  const { setSelectedOption, toggleMenu, onOptionSelect } =
    useContext(DropdownContext);

  const handleClick = () => {
    setSelectedOption(value);
    toggleMenu();
    if (onOptionSelect) {
      onOptionSelect(value); // Call the callback function with the selected option
    }
  };

  return <Item onClick={handleClick}>{children}</Item>;
};

const SelectedOption = () => {
  const { selectedOption } = useContext(DropdownContext);
  return <span>{selectedOption || "Select an option"}</span>;
};

Dropdown.Button = DropdownButton;
Dropdown.List = DropdownList;
Dropdown.Item = DropdownItem;
Dropdown.SelectedOption = SelectedOption;

export default Dropdown;
