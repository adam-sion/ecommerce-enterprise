import { useState } from "react";
import styled, { css } from "styled-components";
import { FaLeaf, FaInfoCircle, FaStar, FaCheckCircle } from "react-icons/fa";
import ReviewSection from "./ReviewSection";
import { fadeIn, fadeOut } from "../../components/utils/Animations/animations";

// Define animations

const FullDetailsWrapper = styled.div`
  max-width: var(--max-width-screen);
  margin: 0 auto;
  padding: var(--spacing-lg);
  background-color: var(--background-color);
  border-radius: var(--border-radius-large);
  @media (max-width: 560px) {
    padding: 0;
  }
  @media (max-width: 900px) {
    padding-top: 0;
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid var(--light-grey-color);
  margin-bottom: var(--spacing-md);
`;

const Tab = styled.button`
  flex: 1;
  text-align: center;
  padding: var(--spacing-sm) 0;
  cursor: pointer;
  background-color: ${({ $active }) =>
    $active ? "var(--background-primary-transparent)" : "transparent"};
  border: none;
  border-bottom: ${({ $active }) =>
    $active ? `3px solid var(--accent-color)` : "none"};
  color: ${({ $active }) =>
    $active ? "var(--accent-color)" : "var(--dark-grey-color)"};
  font-weight: ${({ $active }) => ($active ? "bold" : "normal")};
  font-size: var(--font-size-h5);
  transition:
    color var(--transition-quick),
    border-color var(--transition-quick),
    transform var(--transition-quick);

  &:hover {
    color: var(--accent-color);
  }

  svg {
    margin-right: var(--spacing-xs);
  }
`;

const TabName = styled.div`
  font-size: var(--font-size-h6);
  @media (max-width: 700px) {
    svg {
      display: none;
    }
  }
`;

const Content = styled.div`
  padding: var(--spacing-xl);
  background-color: var(--background-primary-transparent-2);
  border-radius: var(--border-radius-medium);
  line-height: 1.8;
  ${({ $isExiting }) =>
    $isExiting
      ? css`
          animation: ${fadeOut} 0.5s ease-in-out forwards;
        `
      : css`
          animation: ${fadeIn} 0.5s ease-in-out forwards;
        `}
`;

const Paragraph = styled.p`
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-body);
  line-height: 1.7;
  color: var(--text-color-dark);
`;

const Subheading = styled.h3`
  margin-bottom: var(--spacing-lg);
  font-size: var(--font-size-h4);
  font-weight: bold;
  color: var(--text-color);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-left: 4px solid var(--accent-color);
  padding-left: var(--spacing-sm);
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0;
  list-style: none;
  margin-bottom: var(--spacing-sm);
  gap: 0.6rem;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: var(--background-light);
  border-radius: var(--border-radius-small);
  font-size: var(--font-size-body);
  color: var(--text-color-dark);
  max-width: 12rem;
  padding: var(--spacing-xs) var(--spacing-sm); /* Add padding for better spacing */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: subtle shadow for elevation */
  @media (max-width: 768px) {
    max-width: 100%; /* Full width on smaller screens */
    margin-bottom: var(--spacing-xs); /* Space between items */
  }

  svg {
    flex: 0 0 auto; /* Prevent svg from shrinking */
    color: var(--accent-color);
    margin-right: var(--spacing-xs);
  }
`;
const ItemContainer = styled.span`
  display: block;
`;

const FullDetails = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");
  const [isExiting, setIsExiting] = useState(false);

  const changeTab = (tab) => {
    if (tab === activeTab) return;
    setIsExiting(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsExiting(false);
    }, 500); // Duration should match the exit animation
  };

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <Content $isExiting={isExiting}>
            <Subheading>Description</Subheading>
            <Paragraph>{product.description}</Paragraph>
            <Paragraph>
              This product is part of our {product.category.name} collection, under
              the {product.subcategory} subcategory, and is crafted with
              high-quality ingredients.
            </Paragraph>
            <Paragraph>
              Use this daily for best results. Perfect for all skin types, it
              absorbs quickly without leaving a greasy residue.
            </Paragraph>
          </Content>
        );
      case "additional":
        return (
          <Content $isExiting={isExiting}>
            <Subheading>Additional Information</Subheading>
            <Paragraph>
              This product includes the following high-quality materials:
            </Paragraph>
            <List>
              {product.materials.map((material, index) => (
                <ListItem key={index}>
                  <FaCheckCircle /> <ItemContainer>{material}</ItemContainer>
                </ListItem>
              ))}
            </List>
            <Paragraph>
              Sustainably sourced and environmentally friendly, this product
              supports your beauty while respecting nature.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem quis sequi expedita vel voluptas minima, laborum,
              harum impedit et recusandae labore! Quibusdam laboriosam
              laudantium accusamus obcaecati ducimus voluptas minus ipsum. Quis
              mollitia, aut autem nemo dolor, quisquam in eos odit veritatis
              exercitationem ea? Dolor omnis sed at nisi molestiae voluptatem.
              Eius ut consequatur ad itaque. Velit asperiores voluptatum aperiam
              dolorum!
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem quis sequi expedita vel voluptas minima, laborum,
              harum impedit et recusandae labore! Quibusdam laboriosam
              laudantium accusamus obcaecati ducimus voluptas minus ipsum. Quis
              mollitia, aut autem nemo dolor, quisquam in eos odit veritatis
              exercitationem ea? Dolor omnis sed at nisi molestiae voluptatem.
              Eius ut consequatur ad itaque. Velit asperiores voluptatum aperiam
              dolorum!
            </Paragraph>
          </Content>
        );
      case "reviews":
        return (
          <Content $isExiting={isExiting}>
            <Subheading>Reviews</Subheading>
            <Paragraph>
              No reviews yet. Be the first to review this product!
            </Paragraph>
            <ReviewSection product={product} />
          </Content>
        );
      default:
        return null;
    }
  };

  return (
    <FullDetailsWrapper>
      <Tabs>
        <Tab
          $active={activeTab === "description"}
          onClick={() => changeTab("description")}
        >
          <TabName>
            <FaLeaf /> <span>Description</span>
          </TabName>
        </Tab>
        <Tab
          $active={activeTab === "additional"}
          onClick={() => changeTab("additional")}
        >
          <TabName>
            <FaInfoCircle /> <span>More Information</span>
          </TabName>
        </Tab>
        <Tab
          $active={activeTab === "reviews"}
          onClick={() => changeTab("reviews")}
        >
          <TabName>
            <FaStar />
            <span> Reviews (0)</span>
          </TabName>
        </Tab>
      </Tabs>
      {renderContent()}
    </FullDetailsWrapper>
  );
};

export default FullDetails;
