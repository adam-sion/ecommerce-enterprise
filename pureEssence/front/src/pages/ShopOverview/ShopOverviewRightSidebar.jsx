import styled from "styled-components";
import ProductOverview from "../../components/common/ProductOverview/ProductOverview";
import FilterComponent from "../../components/common/FilterComponent/FilterComponent";
import Categories from "../../components/common/Categories/Categories";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Container = styled.section`
  display: flex;
  width: 100%;
  max-width: var(--max-width-screen);
  margin: auto;
  gap: 1.5rem;
  justify-content: space-between;
  margin-top: 1.5rem;

  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const RightColumn = styled.div`
  flex: 0.3;
  max-width: 23.5rem;
  position: sticky;
  top: 1rem; // Adjust this value based on your layout needs
  align-self: flex-start;
  @media (max-width: 1080px) {
    display: none;
  }
  /* Add any additional styles you want for the left column */
`;

const ContentArea = styled.div`
  flex: 0.8;
  @media (max-width: 1080px) {
    flex: 1;
  }
  /* You can also use flex-grow: 1; to allow it to flexibly take up remaining space */
`;

const ShopOverviewRightSidebar = ({ dispatchAction }) => {
  const [imageUrl, setImageUrl] = useState("/breadcrumb/fashion.jpeg");
  const { category } = useParams();
  useEffect(() => {
    const categoryImageMap = {
      haircare: "/breadcrumb/haircare.jpeg",
      makeup: "/breadcrumb/makeup.jpeg",
      skincare: "/breadcrumb/skincare.jpeg",
      wellness: "/breadcrumb/wellness.jpeg",
      natural: "/breadcrumb/natural.jpeg",
    };
    const newImageUrl =
      categoryImageMap[category] || "/breadcrumb/natural.jpeg";
    setImageUrl(newImageUrl);
  }, [category]);
  return (
    <>
      <Breadcrumb next="Shop" imageUrl={imageUrl} title={category || "Shop"} />
      <Container>
        <ContentArea>
          <ProductOverview dispatchAction={dispatchAction} />
        </ContentArea>
        <RightColumn>
          <FilterComponent dispatchAction={dispatchAction} />
        </RightColumn>
      </Container>
      <Categories title={false} />
    </>
  );
};

export default ShopOverviewRightSidebar;
