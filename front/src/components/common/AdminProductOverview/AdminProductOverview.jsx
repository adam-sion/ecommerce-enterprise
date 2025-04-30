import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaThLarge, FaTh, FaThList } from "react-icons/fa";
import Filter from "../../../assets/icons/filter.svg?react";
import {
  BarHeader,
  BtnContainer,
  ColumnSelectorBar,
  ContentInner,
  FilterContainer,
  Grid,
  MainContent,
  ProductFooter,
  Progress,
  ProgressBarContainer,
  ProgressBarWrapper,
  ResultsSummary,
  ResultsSummaryText,
  ShowMoreText,
} from "../ProductOverview/ProductOverview.styles"

import Row from "../../utils/Row/Row";
import { Label } from "../CardShop/CardShop.styles";
import Dropdown from "../../utils/DropdownBtn/DropdownBtn";
import SortProducts from "../../utils/SortProducts/SortProducts";
import { useParams } from "react-router-dom";
import FilterPanel from "../FilterComponent/FilterComponent";
import Sidebar from "../Sidebar/Sidebar";
import { ProductCard } from "../CreateProductCard/ProductCard";
import { CategoryCard } from "../CreateCategoryCard/CategoryCard";
import { getCategories } from "../../../features/createCategory/categorySlice";

const sortBY = [
  "Featured",
  "Price: Low to High",
  "Price: High to Low",
  "Date: Old to New",
  "Date: New to Old",
  "Orders: Fewest to Most",
  "Orders: Most to Fewest",
  "Avg. Customer Review",
];

function AdminProductOverview({ dispatchAction, defaultColumns, activeTab }) {
  
  const { category, query } = useParams();
  const dispatch = useDispatch();
  const [columns, setColumns] = useState(defaultColumns || 3); // Default to 3 columns
  const [actualColumns, setActualColumns] = useState(3); // Adjusted based on screen size
  const [itemsToShow, setItemsToShow] = useState(12); // Display 12 items initially
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  const categories = useSelector((state) => state.category.categories);
  const totalResults = activeTab === "product" ? filteredProducts.length : categories.length;
  const resultsPerPage = actualColumns * 5;
  const progressPercentage = Math.floor((itemsToShow / totalResults) * 100);
  // Function to handle column change based on user selection
  const handleColumnChange = (numColumns) => {
    setColumns(numColumns);
    adjustColumns(numColumns);
  };

  // Function to adjust columns based on screen size
  const adjustColumns = (selectedColumns) => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 720) {
      setActualColumns(2); // Force 2 columns on screens smaller than 720px
    } else if (screenWidth < 1200) {
      if (selectedColumns === 4) {
        setActualColumns(3);
      } else if (selectedColumns === 3) {
        setActualColumns(2);
      } else {
        setActualColumns(selectedColumns);
      }
    } else {
      setActualColumns(selectedColumns);
    }
  };

  // Effect to handle screen resize
  useEffect(() => {
    const handleResize = () => {
      adjustColumns(columns);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [columns]);

  const handleLoadMore = () => {
    setItemsToShow((prev) => Math.min(prev + resultsPerPage, totalResults));
  };
  useEffect(() => {
    // Dispatch action to set the category filter
    if (dispatchAction) {
      if (category === "all categories") {
        dispatch({ type: "products/reset_category_filter" });
      } else {
        dispatch({ type: "products/category_filter", payload: category });
      }
    } else {
      dispatch({ type: "products/reset_category_filter" });
    }
    if (query) {
      dispatch({
        type: "products/filter_by_keywords",
        payload: query.toLowerCase().split(" "),
      });
    }
  }, [category, dispatch, query, dispatchAction]);

  // Fetch categories when component mounts
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  // Update the state based on changes to defaultColumns.
  useEffect(() => {
    setColumns(defaultColumns || 3);
  }, [defaultColumns]);
  return (
    <>
      <BarHeader>
        <ResultsSummary>
          Showing 1 - {Math.min(itemsToShow, totalResults)} of {totalResults}{" "}
          results
        </ResultsSummary>
        <BtnContainer>
          <DropDownContent
            filteredProducts={filteredProducts}
            position="right"
          />
        </BtnContainer>
      </BarHeader>
      <ColumnSelectorBar>
        <FilterContainer>
          <Sidebar.Provider>
            <Sidebar.Trigger opens="mySidebar" position="left">
              <Row
                type="horizontal"
                $justifyContent="center"
                $alignItems="center"
                $flexGap=".6rem"
              >
                <Filter /> <Label>Filter</Label>
              </Row>
            </Sidebar.Trigger>

            <Sidebar.Content name="mySidebar">
              <FilterPanel dispatchAction={dispatchAction} />
            </Sidebar.Content>
          </Sidebar.Provider>
        </FilterContainer>
        <ContentInner>
          <DropDownContent
            filteredProducts={filteredProducts}
            position="left"
          />
        </ContentInner>
        <ContentInner>
          Showing 1 - {Math.min(itemsToShow, totalResults)} of {totalResults}{" "}
          results
        </ContentInner>
        <div>
          <FaThList
            className={`icon ${columns === 2 ? "active" : ""}`}
            size={24}
            onClick={() => handleColumnChange(2)}
            title="List View (2 Columns)"
          />
          <FaThLarge
            className={`icon ${columns === 3 ? "active" : ""}`}
            size={24}
            onClick={() => handleColumnChange(3)}
            title="3 Columns"
          />
          <FaTh
            className={`icon fa-th ${columns === 4 ? "active" : ""}`}
            size={24}
            onClick={() => handleColumnChange(4)}
            title="4 Columns"
          />
        </div>
      </ColumnSelectorBar>
      <MainContent>
        <Grid $columns={actualColumns} $isListView={columns === 2}>
          {activeTab === "product" ? (
            filteredProducts.slice(0, itemsToShow).map((product) => (
              <ProductCard
                narrowColumns={actualColumns > 3}
                key={`${product.id}-${columns}`}
                originalProduct={product}
              />
            ))
          ) : (
            categories.slice(0, itemsToShow).map((category) => (
              <CategoryCard
                key={`${category.id}-${columns}`}
                originalCategory={category}
              />
            ))
          )}
        </Grid>
        {itemsToShow < totalResults && (
          <ProductFooter
            type="horizontal"
            $justifyContent="space-between"
            $alignItems="center"
            $flexGap="2rem"
          >
            <ProgressBarContainer>
              <ResultsSummaryText>
                Showing {itemsToShow} of {totalResults} items
              </ResultsSummaryText>
              <ProgressBarWrapper>
                <Progress $width={progressPercentage} />
              </ProgressBarWrapper>
              <ShowMoreText
                $color="var(--primary-color-dark-2)"
                $underlineColor="var(--primary-color-dark-2)"
                onClick={handleLoadMore}
              >
                Show More
              </ShowMoreText>
            </ProgressBarContainer>
          </ProductFooter>
        )}
      </MainContent>
    </>
  );
}

export default AdminProductOverview;

const DropDownContent = ({ filteredProducts, position }) => {
  const dispatch = useDispatch();
  const handleDropdownChange = async (option) => {
    const sortedProducts = SortProducts(option, filteredProducts);
    dispatch({ type: "products/sort", payload: sortedProducts });
  };
  return (
    <Dropdown
      size="var(--font-size-small)"
      outline={true}
      onOptionSelect={handleDropdownChange}
      position={position}
    >
      <Dropdown.Button>
        <Dropdown.SelectedOption />
      </Dropdown.Button>
      <Dropdown.List
        data={sortBY}
        render={(option, index) => (
          <Dropdown.Item key={index} value={option}>
            {option}
          </Dropdown.Item>
        )}
      />
    </Dropdown>
  );
};
