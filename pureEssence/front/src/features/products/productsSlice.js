// Initial state
const initialState = {
  products: [],
  loading: true,
  productsByCate: [],
  filteredProducts: [],
  activeFilters: {
    price: { min: 0, max: Infinity },
    stars: false,
    colors: [],
    brand: "",
    sizes: [],
  },
  restartFilter: [],
};

const sortByAvgCustomerReview = (a, b) => b.rating.rate - a.rating.rate;

const applyFilters = (products, filters) => {
  return products
    .filter(
      (product) =>
        product.price >= filters.price.min && product.price <= filters.price.max
    )
    .filter((product) => (filters.stars ? product.rating.rate >= 4 : true))
    .filter((product) =>
      filters.colors.length > 0
        ? filters.colors.some((color) => product.colors.includes(color))
        : true
    )
    .filter((product) =>
      filters.brand ? product.brand === filters.brand : true
    )
    .filter((product) =>
      filters.sizes.length > 0
        ? filters.sizes.some((size) => product.sizes.includes(size))
        : true
    );
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "products/set": {
      const sortedProducts = action.payload.allProductsData
        .slice()
        .sort(sortByAvgCustomerReview);
      return {
        ...state,
        products: sortedProducts,
        filteredProducts: sortedProducts,
        productsByCate: action.payload.cateProductsData,
        loading: false,
        restartFilter: sortedProducts,
      };
    }

    case "products/category_filter": {
      const filteredProducts = state.products.filter(
        (product) => product.category === action.payload
      );
      return {
        ...state,
        restartFilter: filteredProducts,
        filteredProducts,
        activeFilters: {
          price: { min: 0, max: Infinity },
          stars: false,
          colors: [],
          brand: "",
          sizes: [],
        },
      };
    }

    case "products/reset_category_filter":
      return {
        ...state,
        filteredProducts: state.products,
        restartFilter: state.products,
        activeFilters: {
          price: { min: 0, max: Infinity },
          stars: false,
          colors: [],
          brand: "",
          sizes: [],
        },
      };

    case "products/filter_by_price": {
      const { min, max } = action.payload;
      const updatedFilters = { ...state.activeFilters, price: { min, max } };
      return {
        ...state,
        activeFilters: updatedFilters,
        filteredProducts: applyFilters(state.restartFilter, updatedFilters),
      };
    }

    case "products/filter_by_stars": {
      const updatedFilters = { ...state.activeFilters, stars: true };
      return {
        ...state,
        activeFilters: updatedFilters,
        filteredProducts: applyFilters(state.restartFilter, updatedFilters),
      };
    }

    case "products/r_filter_by_stars": {
      const updatedFilters = { ...state.activeFilters, stars: false };
      return {
        ...state,
        activeFilters: updatedFilters,
        filteredProducts: applyFilters(state.restartFilter, updatedFilters),
      };
    }

    case "products/filter_by_colors": {
      const updatedFilters = {
        ...state.activeFilters,
        colors: state.activeFilters.colors.includes(action.payload)
          ? state.activeFilters.colors
          : [...state.activeFilters.colors, action.payload],
      };
      return {
        ...state,
        activeFilters: updatedFilters,
        filteredProducts: applyFilters(state.restartFilter, updatedFilters),
      };
    }

    case "products/r_filter_by_colors": {
      const updatedFilters = {
        ...state.activeFilters,
        colors: state.activeFilters.colors.filter(
          (color) => color !== action.payload
        ),
      };
      return {
        ...state,
        activeFilters: updatedFilters,
        filteredProducts: applyFilters(state.restartFilter, updatedFilters),
      };
    }

    case "products/filter_by_brand": {
      const updatedFilters = { ...state.activeFilters, brand: action.payload };
      return {
        ...state,
        activeFilters: updatedFilters,
        filteredProducts: applyFilters(state.restartFilter, updatedFilters),
      };
    }

    case "products/r_filter_by_brand": {
      const updatedFilters = { ...state.activeFilters, brand: "" };
      return {
        ...state,
        activeFilters: updatedFilters,
        filteredProducts: applyFilters(state.restartFilter, updatedFilters),
      };
    }

    case "products/filter_by_sizes": {
      const updatedFilters = {
        ...state.activeFilters,
        sizes: [action.payload], // Only the selected size is active
      };
      return {
        ...state,
        activeFilters: updatedFilters,
        filteredProducts: applyFilters(state.restartFilter, updatedFilters),
      };
    }

    case "products/r_filter_by_sizes": {
      const updatedFilters = {
        ...state.activeFilters,
        sizes: [], // Reset the size filter
      };
      return {
        ...state,
        activeFilters: updatedFilters,
        filteredProducts: applyFilters(state.restartFilter, updatedFilters),
      };
    }

    case "products/reset_filter":
      return {
        ...state,
        filteredProducts: state.restartFilter,
        activeFilters: {
          price: { min: 0, max: Infinity },
          stars: false,
          colors: [],
          brand: "",
          sizes: [],
        },
      };

    case "products/sort":
      return {
        ...state,
        filteredProducts: action.payload,
      };

    case "products/filter_by_keywords": {
      const keywords = action.payload;
      const filteredProducts = state.filteredProducts.filter((product) =>
        keywords.some((keyword) => {
          const lowerKeyword = keyword.toLowerCase();
          return (
            product.title.toLowerCase().includes(lowerKeyword) ||
            product.description.toLowerCase().includes(lowerKeyword) ||
            (lowerKeyword === "discount" &&
              Object.prototype.hasOwnProperty.call(product, "discount"))
          );
        })
      );
      return {
        ...state,
        filteredProducts,
      };
    }

    default:
      return state;
  }
};

export default productsReducer;
