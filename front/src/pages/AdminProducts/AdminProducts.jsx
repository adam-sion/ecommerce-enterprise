import { AdminForm } from "../../components/common/AdminForm/AdminForm"

import styled from "styled-components";
import ProductOverview from "../../components/common/ProductOverview/ProductOverview";
import FilterComponent from "../../components/common/FilterComponent/FilterComponent";
import Categories from "../../components/common/Categories/Categories";
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminProductOverview from "../../components/common/AdminProductOverview/AdminProductOverview";
import { Box } from "@mui/material";
import { TabButton, Tabs } from "../../components/common/ShoppingCartWishlist/styles";

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

const LeftColumn = styled.div`
  flex: 0.3;
  max-width: 23.5rem;
  position: sticky;
  top: 1rem;
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

export const AdminProducts = ({ dispatchAction, defaultColumns }) => {
  const [imageUrl, setImageUrl] = useState("/breadcrumb/fashion.jpeg");
  const [activeTab, setActiveTab] = useState(0);
  const { category } = useParams();

  useEffect(() => {
    const newImageUrl = "/breadcrumb/natural.jpeg";
    setImageUrl(newImageUrl);
  }, [category]);


  return (
    <>
      <Breadcrumb 
        next="Admin"
        next2={[
          activeTab === 0 ? "Products" : "Categories",
          activeTab === 0 ? "/admin/products" : "/admin/categories"
        ]}
        imageUrl={imageUrl} 
        title={activeTab === 0 ? "Products" : "Categories"} 
      />
      <Box sx={{ width: '100%' }}>
      <Tabs>
          <TabButton
            $active={activeTab === 0}
            onClick={() => {
              setActiveTab(0);
            }}
          >
            Products
          </TabButton>
          <TabButton
            $active={activeTab === 1}
            onClick={() =>{
              setActiveTab(1)
            }}
          >
           Categories
          </TabButton>
        </Tabs>
      </Box>
      <Container>
        <LeftColumn>
          <FilterComponent dispatchAction={dispatchAction} />
        </LeftColumn>
        <ContentArea>
          <AdminProductOverview
            activeTab={activeTab === 0 ? "product" : "category"}
            dispatchAction={dispatchAction}
            defaultColumns={defaultColumns}
          />
        </ContentArea>
      </Container>
      <Categories title={false} />
    </>
  );
};

