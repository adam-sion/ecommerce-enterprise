import styled from "styled-components";
import Row from "../../utils/Row/Row";

export const FooterWrapper = styled.footer`
  background-color: transparent;
  color: var(--text-color);
  padding: 3rem 0;
  text-align: center;
  @media (max-width: 610px) {
    margin-bottom: 1rem;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 1rem;
`;

export const Logo = styled.div`
  img {
    width: 12rem;
    height: auto;
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2));
    transition:
      transform var(--transition-slow),
      filter var(--transition-slow);

    &:hover {
      transform: translateY(-5px);
      filter: drop-shadow(2px 8px 12px rgba(0, 0, 0, 0.3));
    }
  }
`;

export const SectionColumn = styled.div`
  flex: 1;
  min-width: 200px;
  text-align: left;

  h3 {
    color: var(--accent-color);
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;

      svg {
        color: var(--accent-color) !important;
      }
      a {
        color: var(--text-color);
        text-decoration: none;
        transition: color 0.3s;
        display: flex;
        gap: 0.7rem;
        align-items: center;
        transition: color var(--transition-quick);
        &:hover {
          color: var(--accent-color);
        }
      }
    }

    .contact-info {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

export const SubFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  color: var(--dark-grey-color);
  padding: 1rem 0;
  border-top: 1px solid var(--light-grey-color);

  p {
    margin: 0;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;

    p {
      text-align: center;
    }
  }
`;

export const IconLogo = styled(Row)`
  margin-top: var(--spacing-lg);

  svg {
    width: 2rem;
    height: 2rem;
    color: var(--accent-color);
    transition:
      transform 0.4s ease,
      color 0.4s ease,
      filter 0.4s ease;
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));

    &:hover {
      transform: rotate(360deg) scale(1.2);
      filter: drop-shadow(0 0 10px var(--accent-color));
    }
  }

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;
export const SpanDeveloper = styled.span`
  color: var(--primary-color-dark-1);
`;
