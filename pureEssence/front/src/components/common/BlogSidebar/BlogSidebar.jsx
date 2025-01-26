import styled from "styled-components";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import RecentArticles from "./RecentArticles";
import CategoriesBlog from "./CategoriesBlog";
import KeywordsHighlight from "./KeywordsHighlight";

const SidebarContainer = styled.div``;
const CarouselContent = styled.div`
  max-width: 18rem;
  margin: auto;
  width: 100%;
`;
const BlogSidebar = () => {
  return (
    <>
      <SidebarContainer>
        <CarouselContent>
          <ProductCarousel initialNum={1} title={null} paddingY="0" />
        </CarouselContent>
        <RecentArticles />
        <CategoriesBlog />
        <KeywordsHighlight />
      </SidebarContainer>
    </>
  );
};

export default BlogSidebar;
