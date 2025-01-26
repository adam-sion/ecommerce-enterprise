import Sidebar, { SidebarContext } from "../Sidebar/Sidebar";
import { TbGridDots } from "react-icons/tb";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CustomAccordion, {
  CustomAccordionItem,
} from "../../utils/CustomAccordion/CustomAccordion";
import { useContext } from "react";

const MenuWrapper = styled.div`
  padding: var(--spacing-lg);
  background-color: var(--background-color);
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: var(--primary-color);
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
  font-family: var(--font-secondary);
  font-size: var(--font-size-h5);
  display: flex;
  align-items: center;
  gap: 0.8rem; /* Proper spacing between icon and text */
  margin-bottom: 0.5rem;
`;
const menuItems = [
  { title: "HOME", link: "/", icon: <MdKeyboardDoubleArrowRight /> },
  {
    title: "SHOP",
    link: "#",
    icon: <MdKeyboardDoubleArrowRight />,
    items: [
      { label: "Shop Standard", link: "/all-products" },
      { label: "Shop List", link: "/list-shop" },
      { label: "Shopping Cart", link: "/cart-summary" },
      { label: "Left Sidebar", link: "/shop-left-sidebar" },
      { label: "Right Sidebar", link: "/shop-right-sidebar" },
      { label: "Full Width", link: "/full-width" },
    ],
  },
  {
    title: "PAGES",
    link: "#",
    icon: <MdKeyboardDoubleArrowRight />,
    items: [
      { label: "About Us", link: "/about-us" },
      { label: "FAQ", link: "/faq" },
      { label: "Error 404", link: "/not-found/404" },
    ],
  },
  {
    title: "BLOG",
    link: "#",
    icon: <MdKeyboardDoubleArrowRight />,
    items: [
      { label: "Grid Layout", link: "/blog-grid-layout" },
      { label: "Masonry Layout", link: "/blog-masonry" },
      { label: "Blog List", link: "/blog-list" },
      { label: "Blog Simple", link: "/blog-simple" },
    ],
  },
  {
    title: "CONTACT",
    link: "/contact",
    icon: <MdKeyboardDoubleArrowRight />,
  },
];
const MenuNavigationSmallSC = () => {
  return (
    <Sidebar.Provider>
      <Sidebar.Trigger opens="mySidebarMenu" position="right">
        <IconContainer>
          <TbGridDots />
        </IconContainer>
      </Sidebar.Trigger>
      <Sidebar.Content name="mySidebarMenu">
        <HamburgerMenuContainer />
      </Sidebar.Content>
    </Sidebar.Provider>
  );
};

export default MenuNavigationSmallSC;

const HamburgerMenuContainer = () => {
  const { closeSidebar } = useContext(SidebarContext);
  return (
    <MenuWrapper>
      <CustomAccordion allowMultipleExpanded={false} listToExpand={["0"]}>
        {menuItems.map((item, index) => (
          <CustomAccordionItem
            key={index}
            uuid={String(index)}
            heading={item.title}
          >
            {item.items ? (
              item.items.map((subItem, subIndex) => (
                <div key={subIndex}>
                  <StyledLink to={subItem.link} onClick={() => closeSidebar()}>
                    {item.icon && item.icon}
                    {subItem.label}
                  </StyledLink>
                </div>
              ))
            ) : (
              <div>
                <StyledLink
                  to={item.link}
                  onClick={(e) => {
                    closeSidebar();
                    e.stopPropagation(); // Prevent bubbling issues
                  }}
                >
                  {item.icon && item.icon}
                  {item.title}
                </StyledLink>
              </div>
            )}
          </CustomAccordionItem>
        ))}
      </CustomAccordion>
    </MenuWrapper>
  );
};
