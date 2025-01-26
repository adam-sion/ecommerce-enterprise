// updateData each time filteredProducts change and get"brands","sizes"
export function updateFilteredData(products) {
  const brandsCount = {};
  const allSizes = new Set();

  products.forEach((product) => {
    // Update brands count
    const brand = product.brand;
    if (brandsCount[brand]) {
      brandsCount[brand] += 1;
    } else {
      brandsCount[brand] = 1;
    }

    // Update sizes
    if (product.sizes) product.sizes.forEach((size) => allSizes.add(size));
  });

  return {
    brands: brandsCount,
    sizes: Array.from(allSizes).sort((a, b) => a - b),
  };
}
