import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Heading from "../../utils/Heading/heading";

// Styled Components
const BreadcrumbContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem 0;
  background-color: var(--primary-color-light-8);
  @media (max-width: 768px) {
    padding: var(--spacing-sm) var(--spacing-md);
  }
`;

const BreadcrumbWrapper = styled.div`
  max-width: ${({ $maxWidth }) => $maxWidth || "1400px"};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: ${({ $maxWidth }) => $maxWidth || "1440px"}) {
    width: 80%;
    margin: auto;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: var(--spacing-sm) var(--spacing-md);
  }
`;

const BreadcrumbLinks = styled.div`
  display: flex;
  align-items: center;
  font-family: var(--font-secondary);
  font-size: var(--font-size-small);
  color: var(--grey-color);

  a {
    color: var(--grey-color);
    text-decoration: none;
    transition: color var(--transition-quick);

    &:hover {
      color: var(--accent-color);
    }
  }

  .separator {
    margin: 0 var(--spacing-xs);
    color: var(--text-color);
  }

  .current-page {
    color: var(--accent-color);
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-body);
  }
`;

// Breadcrumb Component
const Breadcrumb2 = ({ title, next, next2, maxWidth }) => {
  return (
    <BreadcrumbContainer $maxWidth={maxWidth}>
      <BreadcrumbWrapper>
        <Heading as="h1">{title}</Heading>
        <BreadcrumbLinks>
          <Link to="/">
            <FaHome />
          </Link>
          <span className="separator"> &gt; </span>
          {next2 ? (
            <>
              <Link to={next2[1]}>
                <span>{next}</span>
              </Link>
              <span className="separator"> &gt; </span>
              <span className="current-page">{next2[0]}</span>
            </>
          ) : (
            <span className="current-page">{next}</span>
          )}
        </BreadcrumbLinks>
      </BreadcrumbWrapper>
    </BreadcrumbContainer>
  );
};

export default Breadcrumb2;

// Usage example with explanatory comments
// The `next` prop is used to display the first breadcrumb item.
// The `next2` prop is an array with two elements:
//   - The first element is the label for the second breadcrumb item.
//   - The second element is the URL for the second breadcrumb item when `next2` is present.
// The `title` prop sets the title displayed in the breadcrumb.
// The `imageUrl` prop provides the URL for the background image of the breadcrumb. If no imageUrl is provided, a default layout without an image is used.

// Example usage:
// <Breadcrumb
//   next="Blog List"                  // This is the first breadcrumb item
//   next2={["Blog Detail", "/blog-list"]} // If there are more items, this is an array where:
//                                         // - The first element is the label of the second breadcrumb item.
//                                         // - The second element is the URL for the second breadcrumb item.
//   title="Blog Detail"               // The title displayed in the breadcrumb
//   imageUrl="/path/to/image.jpg"     // The URL for the background image of the breadcrumb
// />
