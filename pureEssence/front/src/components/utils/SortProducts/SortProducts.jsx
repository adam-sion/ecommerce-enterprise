// Function to sort by price from low to high
const sortByPriceLowToHigh = (a, b) => a.price - b.price;

// Function to sort by price from highest to lowest
const sortByPriceHighToLow = (a, b) => b.price - a.price;

// Function to sort by date from old to new
const sortByDateOldToNew = (a, b) =>
  new Date(a.createdAt) - new Date(b.createdAt);

// Function to sort by date from new to old
const sortByDateNewToOld = (a, b) =>
  new Date(b.createdAt) - new Date(a.createdAt);

// Function to sort by number of orders from lowest to highest
const sortByOrdersFewestToMost = (a, b) => a.orders - b.orders;

// Function to sort by number of orders from highest to lowest
const sortByOrdersMostToFewest = (a, b) => b.orders - a.orders;

// Function to sort by average customer rating

const sortByAvgCustomerReview = (a, b) => b.rating.rate - a.rating.rate;

// Function to sort by ID from highest to lowest
// const sortByIdHighToLow = (a, b) => a.id - b.id;

const SortProducts = (option, products) => {
  switch (option) {
    case "Price: Low to High":
      return products.slice().sort(sortByPriceLowToHigh);
    case "Price: High to Low":
      return products.slice().sort(sortByPriceHighToLow);
    case "Date: Old to New":
      return products.slice().sort(sortByDateOldToNew);
    case "Date: New to Old":
      return products.slice().sort(sortByDateNewToOld);
    case "Orders: Fewest to Most":
      return products.slice().sort(sortByOrdersFewestToMost);
    case "Orders: Most to Fewest":
      return products.slice().sort(sortByOrdersMostToFewest);
    case "Avg. Customer Review":
      return products.slice().sort(sortByAvgCustomerReview);

    case "Featured": // In the "Featured" option you can select the option you want to show, since it is the one that comes by default
      // return products.slice().sort(sortByIdHighToLow);
      return products.slice().sort(sortByAvgCustomerReview);
    default:
      // If the option is not recognized, return the products unsorted
      return products;
  }
};
export default SortProducts;
