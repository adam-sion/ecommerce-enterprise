import { useRef, useState } from "react";
import { LuSearch } from "react-icons/lu";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Dropdown from "../../utils/DropdownBtn/DropdownBtn";
import { CloseButton2 } from "../../utils/CloseButton/CloseButton";

const listCategories = [
  "All categories",
  "Skincare",
  "Haircare",
  "Makeup",
  "Wellness",
];

const SearchComponent = ({ isOpen = true, onClose }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedOption, setSelectedOption] = useState(listCategories[0]);
  const searchComponentRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `/search/${encodeURIComponent(selectedOption.toLowerCase())}/${encodeURIComponent(searchText.toLowerCase())}`;
    if (searchText) {
      navigate(url);
      onClose(event);
      setSearchText("");
    }
  };

  return (
    <>
      <StyledSearchComponent
        className={isOpen ? "open" : ""}
        ref={searchComponentRef}
      >
        <CloseBtn onClick={onClose}>
          <CloseButton2 aria-label="Remove item" />
        </CloseBtn>

        <FormSearch onSubmit={handleSubmit}>
          <SearchElements>
            <Dropdown
              size="var(--font-size-h5)"
              customStyles={{
                backgroundColor: "var(--background-color)",
                color: "var(--text-color)",
                borderRadius: "var(--border-radius-medium)",
              }}
              onOptionSelect={setSelectedOption}
              position="left"
            >
              <Dropdown.Button>
                <Dropdown.SelectedOption />
              </Dropdown.Button>
              <Dropdown.List
                data={listCategories}
                render={(option, index) => (
                  <Dropdown.Item key={index} value={option}>
                    {option}
                  </Dropdown.Item>
                )}
              />
            </Dropdown>
            <Separator>|</Separator>
            <SearchField>
              <SearchInput
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Search Products..."
                required
              />
              <SearchButton type="submit">
                <LuSearch
                  color="var(--text-color)"
                  size="1.6rem"
                  style={{ marginRight: ".625rem" }}
                />
              </SearchButton>
            </SearchField>
          </SearchElements>
        </FormSearch>
      </StyledSearchComponent>
      {isOpen && <PanelOverlay onClick={onClose}></PanelOverlay>}
    </>
  );
};

export default SearchComponent;

// Styled Components

const StyledSearchComponent = styled.div`
  position: fixed;
  top: -20rem;
  left: 0;
  width: 100%;
  height: 20rem;
  background: #fff;
  color: var(--text-color);
  z-index: var(--zindex-modal);
  transition: top var(--transition-quick);

  &.open {
    top: 0;
  }
`;

const CloseBtn = styled.div`
  position: absolute;
  right: 30px;
  top: 30px;
  background: none;
  border: none;
  cursor: pointer;
`;

const FormSearch = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const SearchElements = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: var(--spacing-xs) var(--spacing-lg);
  border-radius: var(--border-radius-large);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 550px) {
    flex-direction: column;
    gap: var(--spacing-xs);
    padding: var(--spacing-xs) var(--spacing-md);
    border-radius: var(--border-radius-medium);
  }
`;

const Separator = styled.span`
  color: var(--text-color);

  @media (max-width: 550px) {
    display: none;
  }
`;

const SearchField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-large);

  @media (max-width: 550px) {
    border-radius: var(--border-radius-medium);
    margin-top: var(--spacing-sm);
    padding: var(--spacing-xs) var(--spacing-sm);
  }
`;

const SearchInput = styled.input`
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-h6);
  max-width: 200px;
  background-color: transparent;
  color: var(--text-color);
  border: none;

  &:focus {
    outline: none;
  }

  @media (max-width: 550px) {
    max-width: 100%;
    font-size: var(--font-size-small);
  }
`;

const SearchButton = styled.button`
  background-color: transparent;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  transition: transform 0.4s ease; // Add this line to control the transition effect

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`;

const PanelOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: var(--zindex-dropdown);
`;
