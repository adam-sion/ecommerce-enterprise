import styled, { css } from "styled-components";

const Heading = styled.div`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-family: var(--font-primary);
      font-size: var(--font-size-h1);
      color: black;
      margin-bottom: ${props.$marginBottom || "var(--spacing-sm)"};
      position: relative;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      display: inline-block;
      &::before {
        content: "";
        display: block;
        width: 100px;
        height: 4px;
        background: var(--primary-color);
        margin: 1rem auto;
      }
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: var(--font-size-h2);
      font-weight: 600;
      color: var(--text-color);
      background: linear-gradient(
        135deg,
        ${props.$customBackground ? "#fff" : "#000"},
        var(--primary-color)
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: ${props.$marginBottom || "var(--spacing-sm)"};
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: var(--font-size-h3);
      font-weight: 500;
      color: var(--text-color);
      background: linear-gradient(
        135deg,
        ${props.$customBackground ? "#fff" : "#000"},
        var(--primary-color)
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: ${props.$marginBottom || "var(--spacing-sm)"};
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: var(--font-size-h4);
      font-weight: 700;
      color: ${props.$colorText || "var(--primary-color-dark-2)"};
      margin-bottom: ${props.$marginBottom || "var(--spacing-sm)"};
    `}
  ${(props) =>
    props.as === "h5" &&
    css`
      font-size: var(--font-size-h5);
      font-weight: 700;
      color: ${props.$colorText || "var(--primary-color-dark-2)"};
      margin-bottom: ${props.$marginBottom || "var(--spacing-sm)"};
    `}
    ${(props) =>
    props.as === "h6" &&
    css`
      font-size: var(--font-size-h6);
      font-weight: 300;
      color: ${props.$colorText || "var(--primary-color-dark-2)"};
      margin-bottom: ${props.$marginBottom || "var(--spacing-sm)"};
    `}

  line-height: 1.4;
`;

Heading.defaultProps = {
  $customBackground: false,
};

export default Heading;
