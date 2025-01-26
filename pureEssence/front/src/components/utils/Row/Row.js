import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: ${props.$justifyContent || "space-between"};
      align-items: ${props.$alignItems || "center"};
      gap: ${props.$flexGap || "1rem"};
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      justify-content: ${props.$justifyContent || "flex-start"};
      align-items: ${props.$alignItems || "stretch"};
      gap: ${props.$flexGap || "1.6rem"};
    `}
  
  ${(props) =>
    props.$flexWrap &&
    css`
      flex-wrap: wrap;
    `}
  
  ${(props) =>
    props.$flexBasis &&
    css`
      flex-basis: ${props.basis};
    `}

  ${(props) =>
    props.$flexGrow &&
    css`
      flex-grow: ${props.grow};
    `}

  ${(props) =>
    props.$flexShrink &&
    css`
      flex-shrink: ${props.shrink};
    `}
`;

Row.defaultProps = {
  type: "vertical",
  $justifyContent: "flex-start",
  $alignItems: "stretch",
  $flexGap: "1.6rem",
  $flexWrap: true,
  $flexBasis: "auto",
  $flexGrow: 0,
  $flexShrink: 1,
};

export default Row;

// Example of use:
// import React from 'react';
// import Row from './Row';

// const Example = () => (
//   <div>
//     <Row type="horizontal" $justifyContent="space-around" $alignItems="flex-start" $flexGap="2rem">
//       <div>Item 1</div>
//       <div>Item 2</div>
//       <div>Item 3</div>
//     </Row>
//     <Row type="vertical" $justifyContent="center" $alignItems="center" $flexGap="1rem">
//       <div>Item A</div>
//       <div>Item B</div>
//       <div>Item C</div>
//     </Row>
//   </div>
// );

// export default Example;
