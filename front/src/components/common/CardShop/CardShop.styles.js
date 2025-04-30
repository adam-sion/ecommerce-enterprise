import styled from "styled-components";
import { StarsWrapper } from "../ProductCard/ProductCard.styles";

export const CardShopContainer = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  border-radius: 10px;
  position: relative;
  padding: 0.5rem 3rem 0.5rem 3rem;
  @media (max-width: 680px) {
    max-width: 400px;
    padding: 0.5rem;
  }
`;

export const ImageContainer = styled.div`
  width: 120%;
  position: relative;
  margin-bottom: 0.5rem;
  margin-left: -10%;
  margin-right: -10%;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  max-height: 250px;
  object-fit: contain;
`;

export const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding-bottom: 0;
  background: #fff;
  box-sizing: border-box;
  position: relative;
`;

export const ThumbnailsContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 1;
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
  font-size: 0.85rem;
  color: var(--grey-color);
  margin-top: 5px;
  font-family: var(--font-secondary);
`;

export const ProductMeta = styled.div`
  margin: 20px 0;
`;

export const MetaItem = styled.div`
  font-size: 0.75rem;
  color: var(--grey-color);
  margin: 2px 0;
`;

export const ItemLabel = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
`;

export const PriceInfo = styled.div`
  margin: 5px 0;
`;

export const SizesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin: 3px 0;
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
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  color: var(--grey-color);
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;

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
  margin-bottom: 5px;
`;
