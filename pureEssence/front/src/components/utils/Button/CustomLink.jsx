import styled from "styled-components";

export const CustomLink = styled.div`
  color: ${({ $color }) => $color || "white"};
  font-size: ${({ $size }) => $size || "var(--font-size-body)"};
  position: relative;
  display: inline-block;
  cursor: pointer;
  padding-bottom: 5px;
  font-weight: 700;
  font-family: var(--font-secondary);
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 40%;
    background-color: ${({ $underlineColor }) => $underlineColor || "white"};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
// Example of use
/*
<CustomLink $color="blue" $size="20px" $underlineColor="red">
 Click Me
</CustomLink>
*/
