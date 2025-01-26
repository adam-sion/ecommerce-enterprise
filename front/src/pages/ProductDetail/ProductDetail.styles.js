import styled from "styled-components";
import Row from "../../components/utils/Row/Row";
import Heading from "../../components/utils/Heading/heading";

export const MainPage = styled.main`
  height: auto;
  background-color: white;
`;

export const DetailProductCarousel = styled.section`
  background-color: white;
  padding: 20px;
  @media (max-width: 900px) {
    padding: 0;
  }
  .content {
    padding: 5rem;
    display: grid;
    grid-template-columns: 30% 40% 25%;
    justify-content: space-around;
    margin: auto;
    align-items: center;
    max-width: 1600px;
    /* For screens smaller than 1200px */
    /* For screens smaller than 1400px */
    @media (max-width: 1400px) {
      grid-template-columns: 50% 50%;
      grid-template-rows: auto auto;
      grid-template-areas: "col1 col2";
      gap: 2rem;
      padding: 0;
    }

    /* For screens smaller than 900px */
    @media (max-width: 900px) {
      grid-template-columns: 100%;
      grid-template-rows: auto auto;
      grid-template-areas:
        "col1"
        "col2";
      padding: 3rem;
    }

    /* For screens smaller than 600px */
    @media (max-width: 600px) {
      padding: 2rem;
      grid-template-columns: 100%;
      grid-template-rows: auto auto;
      gap: 1rem;
    }
  }

  .image-show-case {
    max-width: 45rem;
  }
  .column1 {
    width: 100%;
  }

  .column2 {
    width: 100%;
  }
  .column3 {
    width: 100%;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background-color: var(--primary-color-light-5);
  margin: 10px 0;
  width: 80%;
`;

//
// Info Product Section column 2
export const InfoSection = styled.div`
  background-color: var(--background-color);
  border-radius: var(--border-radius-large);
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  gap: var(--spacing-sm); /* Moderate spacing between sections */
  @media (max-width: 1400px) {
    gap: 0;
  }
  @media (max-width: 900px) {
    margin-top: 0.8rem;
  }
`;

export const CategoryText = styled.p`
  font-family: var(--font-secondary);
  font-size: var(--font-size-h6);
  color: var(--primary-color-dark-4);
  margin-bottom: var(--spacing-sm);
`;
export const ProductTile = styled(Heading)`
  margin: 0;
`;
export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: var(--spacing-sm);
`;

export const ProductQuality = styled(Row)``;

export const Stars = styled.div`
  color: #ffcd00;
`;

export const OrderCount = styled.p`
  font-family: var(--font-secondary);
  font-size: var(--font-size-small);
  color: var(--grey-color);
`;

export const PriceWrapper = styled.div`
  /* margin-bottom: var(--spacing-sm); */
`;

export const MetaInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm); /* Moderate spacing between meta sections */
`;

export const MoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

export const AboutList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: var(--font-secondary);
  font-size: var(--font-size-body);
  color: var(--dark-grey-color);
`;

export const AboutItem = styled.li`
  margin-bottom: var(--spacing-xs);
`;

export const DetailsSpecifications = styled.div`
  margin: var(--spacing-sm) 0;
`;

export const PolicyLink = styled(Row)`
  color: var(--accent-color);
  font-family: var(--font-secondary);
  font-size: var(--font-size-body);
  cursor: pointer;
  transition: color var(--transition-quick);

  &:hover {
    color: var(--accent-color-light-1);
  }

  svg {
    margin-right: var(--spacing-xs);
    font-size: 1.2rem;
  }
`;

export const ShippingOptions = styled.div`
  font-family: var(--font-secondary);
  font-size: var(--font-size-body);
  color: var(--dark-grey-color);
`;

export const AdditionalText = styled.p`
  font-size: var(--font-size-small);
  color: var(--grey-color);
  margin: var(--spacing-sm) auto;
`;

export const AdditionalTextPointer = styled.div`
  font-family: var(--font-secondary);
  font-size: var(--font-size-small);
  color: var(--accent-color);
  margin-left: var(--spacing-sm);
  cursor: pointer;
  transition: color var(--transition-quick);

  &:hover {
    color: var(--accent-color-light-1);
  }
`;

export const CreditCards = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);

  img {
    width: 50px;
    height: auto;
    transition: transform var(--transition-quick);

    &:hover {
      transform: scale(1.1);
    }
  }
`;
//
//  Detail Section column 3
export const PurchaseColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid var(--primary-color-dark-1);
  background-color: var(--primary-color-light-9);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  @media (max-width: 1400px) {
    display: none;
  }
`;

// export const ButtonWrapper = styled(Row)`
//   margin-bottom: var(--spacing-md);
// `;

// export const BtnContainer = styled(Row)`
//   padding: 0.5rem 1rem;
//   border-radius: 12px;
//   border: 1px solid var(--primary-color-dark-2);
//   display: flex;
//   align-items: center;
//   transition: background-color 0.3s ease-in-out;

//   svg {
//     font-size: var(--font-size-h6);
//     color: var(--primary-color-dark-2);
//     cursor: pointer;
//   }
// `;

export const Share = styled.span`
  font-size: var(--font-size-body);
  color: var(--accent-color);
  font-weight: 700;
`;

export const ShareContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  svg {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-right: var(--spacing-xs);
  }

  &:hover {
    color: var(--primary-color-dark-3);

    svg {
      color: var(--primary-color-dark-3);
    }
  }
`;

export const ShareText = styled.p`
  color: var(--primary-color-dark-2);
  font-size: var(--font-size-body);
`;

export const PolicyContainer = styled.div`
  margin-bottom: var(--spacing-lg);
`;

export const PolicyItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-md);
  transition: color 0.3s ease-in-out;

  .icon {
    margin-right: var(--spacing-md);
    font-size: var(--font-size-h4);
    color: var(--accent-color);
    flex: 0.14;
  }

  &:hover .icon {
    color: var(--primary-color);
  }
`;

export const PolicyText = styled.p`
  font-size: var(--font-size-small);
  color: var(--text-color-dark);
  margin: 0;
  flex: 1;
  font-family: var(--font-secondary);
  strong {
    color: var(--accent-color);
    font-weight: 700;
  }
`;

export const SizeList = styled.div`
  display: flex;
  gap: var(--spacing-sm);
`;
export const SizeButton = styled.div`
  width: var(--font-size-h6);
  height: var(--font-size-h6);
  border: none;
  background-color: var(--accent-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
  padding: 1.1rem;
  &.selected-size {
    background-color: black;
    color: #fff;
  }

  &:hover {
    color: #fff;
    background-color: grey;
  }
`;
export const SizeItem = styled.span`
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
`;

export const ShareWrapper = styled(Row)`
  margin-bottom: 0.6rem;
  svg {
    color: var(--accent-color);
  }
`;
export const ShareWrapperCol2 = styled(ShareWrapper)`
  margin-top: 0.5rem;
  margin-bottom: 0;
  @media (min-width: 1400px) {
    display: none;
  }
`;
export const ControlWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
  @media (max-width: 1400px) {
    margin-bottom: 0;
  }
`;
export const ItemLabel = styled.p`
  margin-right: var(--spacing-md);
  font-weight: 700;
  font-size: var(--font-size-h6);
  color: var(--text-color-dark);
  font-family: var(--font-primary);
`;

export const ButtonRow = styled(Row)`
  margin-bottom: var(--spacing-md);
  @media (max-width: 1400px) {
    margin-bottom: 0px;
  }
`;
// Purchase Management
export const PurchaseControl = styled(Row)`
  @media (max-width: 1400px) {
    margin-bottom: var(--spacing-md);
  }
`;
export const PurchaseActionCol2 = styled.div`
  display: block;
  @media (min-width: 1400px) {
    display: none;
  }
`;
