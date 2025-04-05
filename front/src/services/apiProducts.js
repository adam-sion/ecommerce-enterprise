import productsData from "../data/productData.json";
import { setBlog } from "../features/blog/blogSlice";
import blogsData from "../data/blogData.json";
import { gql } from "@apollo/client";
import { client } from "../ApolloClient";

const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    products {
    id
    slug
    title
    price
    materials
    sizes
    thumbnails
    image
    description
    stockQuantity
    createdAt
    category {
    name
    }
}
  }
`;

const GET_PRODUCT_BY_SLUG = gql`
  query GET_PRODUCT_BY_SLUG($slug: String!) {
    productBySlug(slug: $slug) {
    id
    slug
    title
    price
    materials
    sizes
    thumbnails
    image
    description
    stockQuantity
    createdAt
    category {
    name
    }
}
  }
`;

// Example of data collection. In your case it would probably be from an external api
export function getProducts() {
  return productsData;
}

const allData = async () => {

  const { data } = await client.query({
    query: GET_PRODUCTS,
      fetchPolicy: "no-cache",
  });

  const allProductsData =  data.products;

  return allProductsData;
}
// Get all products
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
              
      // Fetch your products data
      const allProductsData = await allData();
      console.log(allProductsData);

      // Dispatch an action to update the state with the fetched data
      dispatch({
        type: "products/set",
        payload: { allProductsData},
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error; // Rethrow the error to handle it outside of this function
    }
  };
};
// Get specific product
export const getProduct = async (slug) => {
  const { data } = await client.query({
    query: GET_PRODUCT_BY_SLUG,
      fetchPolicy: "no-cache",
      variables: {slug:slug}
  });

  // The product is searched by slug, if necessary you can change it
  const selectedProduct = data.productBySlug;
  if (!selectedProduct) throw Error(`Error: Unable to locate product`);
  return selectedProduct;
}
// Get articles/blog
export const fetchBlog = () => {
  return async (dispatch) => {
    try {
      dispatch(setBlog(blogsData));
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Rethrow the error to handle it outside of this function
    }
  };
};
export function getBlog(slug) {
  // The product is searched by slug, if necessary you can change it
  const selectedArticle = blogsData.find((article) => article.slug === slug);

  // Find the index of the selected article
  const articleIndex = blogsData.findIndex((article) => article.slug === slug);

  // Get the previous and next articles based on the current article index
  const previousArticle = articleIndex > 0 ? blogsData[articleIndex - 1] : null;
  const nextArticle =
    articleIndex < blogsData.length - 1 ? blogsData[articleIndex + 1] : null;

  if (!selectedArticle) throw Error(`Error: Unable to get the article`);

  return { selectedArticle, previousArticle, nextArticle };
}
