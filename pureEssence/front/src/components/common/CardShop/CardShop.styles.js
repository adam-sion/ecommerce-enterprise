import styled from "styled-components";
import { StarsWrapper } from "../ProductCard/ProductCard.styles";

export const CardShopContainer = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin: auto;
  border-radius: 10px;
  gap: 1rem;
  position: relative;
  flex-wrap: wrap;
  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
    max-width: 400px;
  }
`;

export const ImageContainer = styled.div`
  flex: 1.25;
  position: relative;
  @media (max-width: 1026px) {
    width: 100%;
  }
`;

export const ThumbnailsContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border: 2px solid ${(props) => (props.$active ? "#000" : "#ccc")};
  cursor: pointer;
  transition: border 0.3s ease;
  &:hover {
    border: 2px solid #000;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProductContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 0;
  background: #fff;
  box-sizing: border-box;
  position: relative;
`;

export const SaleTag = styled.div`
  background: #ff0000;
  color: #fff;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 3px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const StarContainer = styled(StarsWrapper)`
  display: flex;
  font-size: 0.8rem;
  margin-right: 10px;
`;

export const ReviewsCount = styled.div`
  font-size: var(--font-size-small);
  color: #888;
`;

export const ProductDescription = styled.p`
  font-size: var(--font-size-body);
  color: var(--grey-color);
  margin-top: 10px;
  font-family: var(--font-secondary);
`;

export const ProductMeta = styled.div`
  margin: 20px 0;
`;

export const MetaItem = styled.div`
  font-size: var(--font-size-small);
  color: var(--grey-color);
  margin: 5px 0;
`;

export const ItemLabel = styled.span`
  font-size: var(--font-size-h6);
  font-weight: 700;
`;

export const PriceInfo = styled.div`
  margin: 20px 0;
`;

export const SizesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0;
`;

export const Label = styled.label`
  font-size: var(--font-size-h6);
  font-weight: bold;
  color: #333;
`;

export const OptionsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const OptionButton = styled.button`
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  border: 2px solid #ddd;
  background-color: #f9f9f9;
  color: var(--grey-color);
  font-size: var(--font-size-body);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background-color: #ddd;
    border-color: #aaa;
    color: #333;
  }

  ${({ $isSelected }) =>
    $isSelected &&
    `
    background-color: #333;
    color: white;
    border-color: #333;
  `}

  &:focus {
    outline: none;
  }
`;
export const ViewMoreLinkContainer = styled.div`
  margin-bottom: 20px;
`;
