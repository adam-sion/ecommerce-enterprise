import PropTypes from "prop-types";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import styled from "styled-components";

// Styled Components

const BreadcrumbContainer = styled.div`
  .breadcrumb-parallax {
    min-height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden; /* Ensure no overflow issues */

    &__overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4); /* Darker overlay */
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__content {
      text-align: center;
      color: var(--background-color);
      z-index: 1; /* Ensure text is above the overlay */
    }

    &__title {
      font-size: var(--font-size-h1);
      text-transform: capitalize;
      font-family: var(--font-primary);
    }

    &__links {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--font-size-small);
      max-width: 95%;
      margin: auto;
      padding: var(--spacing-sm);
      border-radius: var(--border-radius-medium);
      color: var(--background-color);
    }

    &__icon {
      font-size: 1.5rem;
      margin-right: var(--spacing-xs);
      color: var(--primary-color-dark-1);
    }

    &__separator {
      margin: 0 var(--spacing-xs);
    }

    &__next {
      font-weight: bold;
      font-family: var(--font-secondary);
    }
  }

  .breadcrumb-simple {
    margin: var(--spacing-xxl) 0 var(--spacing-lg);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: var(--text-color);
    width: 90%;
    font-family: var(--font-secondary);

    &__icon {
      font-size: 1.5rem;
      margin-right: var(--spacing-xs);
      color: var(--primary-color-dark-1);
    }

    &__separator {
      margin: 0 var(--spacing-xs);
    }

    &__next {
      font-weight: bold;
    }
  }
`;

// Breadcrumb Component

const Breadcrumb = ({ next, next2, title, imageUrl }) => {
  return (
    <BreadcrumbContainer>
      {imageUrl ? (
        <Parallax
          bgImage={imageUrl}
          bgImageStyle={{
            objectFit: "cover",
            objectPosition: "top", // Center the image
          }}
        >
          <div className="breadcrumb-parallax">
            <div className="breadcrumb-parallax__overlay">
              <div className="breadcrumb-parallax__content">
                <h1 className="breadcrumb-parallax__title">{title}</h1>
                <div className="breadcrumb-parallax__links">
                  <Link to="/">
                    <FaHome className="breadcrumb-parallax__icon" />
                  </Link>
                  <span className="breadcrumb-parallax__separator"> &gt; </span>
                  {next2 ? (
                    <Link to={next2[1]}>
                      <span className="breadcrumb-parallax__next">{next}</span>
                    </Link>
                  ) : (
                    <span className="breadcrumb-parallax__next">{next}</span>
                  )}
                  {next2 && (
                    <>
                      <span className="breadcrumb-parallax__separator">
                        {" "}
                        &gt;{" "}
                      </span>
                      <span className="breadcrumb-parallax__next">
                        {next2[0]}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      ) : (
        <div className="breadcrumb-simple">
          <Link to="/">
            <FaHome className="breadcrumb-simple__icon" />
          </Link>
          <span className="breadcrumb-simple__separator"> &gt; </span>
          {next2 ? (
            <Link to={next2[1]}>
              <span className="breadcrumb-simple__next">{next}</span>
            </Link>
          ) : (
            <span className="breadcrumb-simple__next">{next}</span>
          )}
          {next2 && (
            <>
              <span className="breadcrumb-simple__separator"> &gt; </span>
              <span className="breadcrumb-simple__next">{next2[0]}</span>
            </>
          )}
        </div>
      )}
    </BreadcrumbContainer>
  );
};

Breadcrumb.propTypes = {
  next: PropTypes.string.isRequired,
  next2: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Breadcrumb;
