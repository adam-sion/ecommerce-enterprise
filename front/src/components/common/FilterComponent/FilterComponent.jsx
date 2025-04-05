import { useEffect, useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { updateFilteredData } from "../../utils/updateFilteredData/updateFilteredData";
import CustomAccordion, {
  CustomAccordionItem,
} from "../../utils/CustomAccordion/CustomAccordion";
import Row from "../../utils/Row/Row";
import CustomButton from "../../utils/Button/Button";
import Filter from "../../../assets/icons/filter.svg?react";
import {
  BrandCheckbox,
  BrandCount,
  BrandLabel,
  BrandName,
  FilterBrandList,
  FilterPanelContent,
  FilterPanelHeader,
  FilterPanelTitle,
  FilterPanelWrapper,
  FilterPriceWrapper,
  FilterReviewWrapper,
  FilterSizeList,
  IconContainer,
  SizeButton,
} from "./FilterComponent.styles";

const FilterComponent = ({ dispatchAction }) => {
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  const [productsBrand, setproductsBrand] = useState([]);
  const [productsSizes, setproductsSizes] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedReview, setSelectedReview] = useState(false);

  const dispatch = useDispatch();

  const handleChangePrice = (event) => {
    const { name, value } = event.target;
    setPriceRange((prevPriceRange) => ({ ...prevPriceRange, [name]: value }));
  };

  const handleApplyPrice = () => {
    dispatch({
      type: "products/filter_by_price",
      payload: priceRange,
    });
    resetSelections();
  };

  const handleSizeChange = (size) => {
    if (selectedSize === size) {
      setSelectedSize(false);
      dispatch({
        type: "products/r_filter_by_sizes",
      });
    } else {
      setSelectedSize(size);
      dispatch({
        type: "products/filter_by_sizes",
        payload: size,
      });
    }
  };

  const handleBrandChange = (brand) => {
    if (selectedBrand === brand) {
      setSelectedBrand(null);
      dispatch({
        type: "products/r_filter_by_brand",
      });
    } else {
      setSelectedBrand(brand);
      dispatch({
        type: "products/filter_by_brand",
        payload: brand,
      });
    }
  };

  const handleReviewChange = (e) => {
    const checked = e.target.checked;
    if (checked) {
      dispatch({
        type: "products/filter_by_stars",
      });
      setSelectedReview(checked);
    } else {
      dispatch({
        type: "products/r_filter_by_stars",
      });
      setSelectedReview(false);
    }
  };

  const handleResetAllProducts = () => {
    resetSelections();
    if (dispatchAction) {
      dispatch({ type: "products/reset_filter" });
    } else {
      dispatch({ type: "products/reset_category_filter" });
    }
  };

  const resetSelections = () => {
    setSelectedSize(null);
    setSelectedBrand(null);
    setSelectedReview(false);
  };

  useEffect(() => {
    if (filteredProducts) {
      const { brands, sizes } = updateFilteredData(filteredProducts);
      setproductsBrand(brands);
      setproductsSizes(sizes);
    }
  }, [filteredProducts]);

  return (
    <FilterPanelWrapper>
      <FilterPanelHeader>
        <FilterPanelTitle>Filter</FilterPanelTitle>
        <IconContainer>
          <Filter />
        </IconContainer>
      </FilterPanelHeader>
      <FilterPanelContent>
        <CustomAccordion allowMultipleExpanded>
          <CustomAccordionItem uuid="0" heading="Price">
            <FilterPriceWrapper>
              <Row
                type="horizontal"
                $justifyContent="center"
                $alignItems="center"
                $flexGap="1rem"
              >
                <div className="price-input-container">
                  <span className="price-symbol">$</span>
                  <input
                    type="text"
                    name="min"
                    value={priceRange.min}
                    onChange={handleChangePrice}
                    className="price-input"
                    placeholder="Min"
                  />
                </div>
                <span className="price-separator"> - </span>
                <div className="price-input-container">
                  <span className="price-symbol">$</span>
                  <input
                    type="text"
                    name="max"
                    value={priceRange.max}
                    onChange={handleChangePrice}
                    className="price-input"
                    placeholder="Max"
                  />
                </div>
                <CustomButton
                  color="var(--primary-color)"
                  size="mini"
                  $invert
                  onClick={handleApplyPrice}
                  textcolor="var(--text-color)"
                >
                  Apply
                </CustomButton>
              </Row>
            </FilterPriceWrapper>
          </CustomAccordionItem>

          <CustomAccordionItem uuid="1" heading="Reviews">
            <FilterReviewWrapper>
              <input
                type="checkbox"
                onChange={handleReviewChange}
                checked={selectedReview}
              />
              <div className="dress-card-grid__stars">
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
              </div>
              <label> & up</label>
            </FilterReviewWrapper>
          </CustomAccordionItem>

          <CustomAccordionItem uuid="2" heading="Size">
            <FilterSizeList>
              <Row
                type="horizontal"
                $justifyContent="flex-start"
                $alignItems="flex-start"
                $flexGap=".8rem"
              >
                {productsSizes &&
                  productsSizes.map((size) => (
                    <li key={size}>
                      <SizeButton
                        className={`${selectedSize === size ? "selected" : "inactive"}`}
                        onClick={() => handleSizeChange(size)}
                      >
                        {size}
                      </SizeButton>
                    </li>
                  ))}
              </Row>
            </FilterSizeList>
          </CustomAccordionItem>
        </CustomAccordion>

        <CustomButton
          color="var(--primary-color)"
          textcolor="var(--text-color)"
          size="mini"
          $invert
          onClick={handleResetAllProducts}
        >
          Reset Filter
        </CustomButton>
      </FilterPanelContent>
    </FilterPanelWrapper>
  );
};

export default FilterComponent;
