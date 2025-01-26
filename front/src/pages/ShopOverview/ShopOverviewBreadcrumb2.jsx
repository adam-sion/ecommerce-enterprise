import styled from "styled-components";
import ProductOverview from "../../components/common/ProductOverview/ProductOverview";
import FilterComponent from "../../components/common/FilterComponent/FilterComponent";
import Categories from "../../components/common/Categories/Categories";
import Breadcrumb2 from "../../components/common/Breadcrumb/Breadcrumb2";
import { useParams } from "react-router-dom";

const Container = styled.section`
  display: flex;
  width: 100%;
  max-width: var(--max-width-screen);
  margin: auto;
  gap: 1.5rem;
  justify-content: space-between;
  margin-top: 5.5rem;

  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const LeftColumn = styled.div`
  flex: 0.3;
  max-width: 23.5rem;
  position: sticky;
  top: 1rem;
  align-self: flex-start;
  @media (max-width: 1080px) {
    display: none;
  }
`;

const ContentArea = styled.div`
  flex: 0.8;
  @media (max-width: 1080px) {
    flex: 1;
  }
`;

const ShopOverviewBreadcrumb2 = ({ dispatchAction, defaultColumns }) => {
  const { category } = useParams();

  return (
    <>
      <Breadcrumb2 title={category || "Shop"} next="Shop" maxWidth="1400px" />
      <Container>
        <LeftColumn>
          <FilterComponent dispatchAction={dispatchAction} />
        </LeftColumn>
        <ContentArea>
          <ProductOverview
            dispatchAction={dispatchAction}
            defaultColumns={defaultColumns}
          />
        </ContentArea>
      </Container>
      <Categories title={false} />
    </>
  );
};

export default ShopOverviewBreadcrumb2;
