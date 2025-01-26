import styled from "styled-components";
import ProductOverview from "../../components/common/ProductOverview/ProductOverview";
import Categories from "../../components/common/Categories/Categories";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Container = styled.section`
  display: flex;
  width: 100%;
  max-width: var(--max-width-screen);
  margin: auto;
  margin-top: 1.5rem;
`;

const ContentArea = styled.div`
  flex: 1;
  width: 100%;
`;

const ShopOverviewFullWidth = ({ dispatchAction }) => {
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
      </Container>
      <Categories title={false} />
    </>
  );
};

export default ShopOverviewFullWidth;
