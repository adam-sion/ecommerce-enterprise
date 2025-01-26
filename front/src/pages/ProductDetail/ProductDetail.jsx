import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { imgCatalog } from "../../components/utils/generalFunctions";
import RenderStars from "../../components/utils/RenderStars/RenderStars";
import HasDiscount from "../../components/utils/HasDiscount/HasDiscount";
import { MdOutlinePolicy } from "react-icons/md";
import { AiOutlineArrowRight, AiOutlineSafety } from "react-icons/ai";
import CreditCards from "../../components/utils/CreditCards/CreditCards";
import { GiReturnArrow } from "react-icons/gi";
import { FaRegCalendarAlt } from "react-icons/fa";
import ImageShowcase from "../../components/common/ImageShowcase/ImageShowcase";
import {
  AboutItem,
  AboutList,
  AdditionalText,
  AdditionalTextPointer,
  CategoryText,
  DetailProductCarousel,
  DetailsSpecifications,
  Divider,
  InfoSection,
  ItemInfo,
  MainPage,
  MetaInfo,
  MoreInfo,
  OrderCount,
  PolicyContainer,
  PolicyItem,
  PolicyLink,
  PolicyText,
  PriceWrapper,
  ProductQuality,
  ProductTile,
  PurchaseActionCol2,
  PurchaseColumn,
  Share,
  ShareWrapper,
  ShareWrapperCol2,
  ShippingOptions,
  Stars,
} from "./ProductDetail.styles";
import LikeBtn from "../../components/utils/Button/LikeBtn";
import { IconItem } from "../../components/common/ProductCard/ProductCard.styles";
import Row from "../../components/utils/Row/Row";
import SocialIcons from "../../components/utils/SocialIcons/SocialIcons";
import Breadcrumb2 from "../../components/common/Breadcrumb/Breadcrumb2";
import ProductCarousel from "../../components/common/ProductCarousel/ProductCarousel";
import PurchaseAction from "./PurchaseAction";
import FullDetails from "./FullDetails";
import FAQSection from "../../components/common/FAQSection/FAQSection";
const ProductDetail = () => {
  // In this case the data is stored locally, in your case you should adjust according to your needs
  const dispatch = useDispatch();
  const product = useLoaderData();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Reset quantity size and if url is changed
  useEffect(() => {
    setSelectedSize(product.sizes[0]);
    setQuantity(1);
  }, [product.slug, product.sizes]);
  return (
    <>
      {/* <BreadCampWrapper> */}
      <Breadcrumb2
        next="Shop"
        next2={["Product Detail", "/all-products"]}
        title="Product"
        maxWidth="1600px"
      />
      {/* </BreadCampWrapper> */}
      <MainPage>
        {/*  Section 1 of product details */}
        <DetailProductCarousel className="container">
          <div className="content">
            <div className="column1">
              {/* ImageShowcase*/}
              <div className="image-show-case">
                <ImageShowcase images={imgCatalog(product)} product={product} />
              </div>
            </div>
            <div className="column2">
              {/* Additional product information */}
              <InfoSection>
                <Row
                  type="horizontal"
                  $justifyContent="space-between"
                  $alignItems="center"
                >
                  <CategoryText>
                    {product.category.charAt(0).toUpperCase() +
                      product.category.slice(1)}{" "}
                    / {product.subcategory}
                  </CategoryText>
                  <LikeBtn product={product} WrapperComponent={IconItem} />
                </Row>
                <ItemInfo>
                  <ProductQuality
                    $justifyContent="space-around"
                    $alignItems="center"
                    $flexGap=".5rem"
                    type="horizontal"
                  >
                    <Stars>{RenderStars(product.rating.rate)}</Stars>
                    <OrderCount>{product.orders} Sold</OrderCount>
                  </ProductQuality>
                </ItemInfo>
                <ProductTile as="h2">{product.title}</ProductTile>
                <PriceWrapper>
                  <HasDiscount
                    product={product}
                    $fontSize="var(--font-size-h4)"
                    $color="red"
                  />
                </PriceWrapper>

                <MetaInfo>
                  <MoreInfo>
                    <AboutList>
                      <AboutItem>
                        <strong>Material</strong>:{" "}
                        {product.materials.join(", ")}.
                      </AboutItem>
                      <AboutItem>
                        <strong>Brand</strong>: {product.brand}
                      </AboutItem>
                    </AboutList>
                    {/* Only Show Small Screen */}
                    <PurchaseActionCol2>
                      <PurchaseAction
                        product={product}
                        onSelectedSize={setSelectedSize}
                        selectedSize={selectedSize}
                        quantity={quantity}
                        onSelectQuantity={setQuantity}
                        dispatch={dispatch}
                      />
                    </PurchaseActionCol2>

                    {/*  */}
                    <DetailsSpecifications>
                      <PolicyLink
                        type="horizontal"
                        $justifyContent="flex-start"
                        $alignItems="center"
                        $flexGap=".4rem"
                      >
                        <MdOutlinePolicy />
                        <span>Return and Refund Policy</span>
                      </PolicyLink>
                    </DetailsSpecifications>
                    <ShippingOptions>
                      <strong>Shipping options</strong>
                      <Divider />
                      <AdditionalText>
                        Find out delivery times and shipping methods:
                      </AdditionalText>
                      <PolicyItem>
                        <AiOutlineArrowRight size={"1.2rem"} />
                        <AdditionalTextPointer>
                          <strong>Calculate price and delivery time</strong>
                        </AdditionalTextPointer>
                      </PolicyItem>
                    </ShippingOptions>
                  </MoreInfo>
                  <ShippingOptions>
                    <strong>Payment options</strong>
                    <Divider />
                    <CreditCards />
                  </ShippingOptions>
                  <ShareWrapperCol2
                    type="horizontal"
                    $justifyContent="flex-start"
                    $alignItems="flex-start"
                    $flexGap=".8rem"
                  >
                    <Share>Share: </Share>

                    <SocialIcons />
                  </ShareWrapperCol2>
                </MetaInfo>
              </InfoSection>
            </div>
            {/* Purchase action column 3*/}
            <div className="column3">
              <PurchaseColumn>
                {" "}
                <div>
                  <ShareWrapper
                    type="horizontal"
                    $justifyContent="center"
                    $alignItems="flex-start"
                    $flexGap=".8rem"
                  >
                    <Share>Share: </Share>
                    <SocialIcons />
                  </ShareWrapper>

                  <PolicyContainer>
                    <PolicyItem>
                      <GiReturnArrow className="icon" />
                      <PolicyText>
                        <strong>Free Returns</strong>. You have 30 days from the
                        date of receipt.
                      </PolicyText>
                    </PolicyItem>
                    <PolicyItem>
                      <AiOutlineSafety className="icon" />
                      <PolicyText>
                        <strong>Purchase Guarantee</strong>. Receive the product
                        you are expecting or get your money back.
                      </PolicyText>
                    </PolicyItem>
                    <PolicyItem>
                      <FaRegCalendarAlt className="icon" />
                      <PolicyText>12-month Factory Warranty.</PolicyText>
                    </PolicyItem>
                  </PolicyContainer>
                  <PurchaseAction
                    product={product}
                    onSelectedSize={setSelectedSize}
                    selectedSize={selectedSize}
                    quantity={quantity}
                    onSelectQuantity={setQuantity}
                    dispatch={dispatch}
                  />
                </div>
              </PurchaseColumn>
            </div>
          </div>
        </DetailProductCarousel>
      </MainPage>
      {/* Section 2 Full Details */}
      <FullDetails product={product} />
      {/* Section 3 Related Product */}
      <ProductCarousel title="RELATED PRODUCT" />
      {/* Section 1 FAQ */}
      <FAQSection />
    </>
  );
};

export default ProductDetail;
