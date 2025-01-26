import { useEffect, useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { fetchBlog, fetchProducts } from "./services/apiProducts";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/common/Footer/Footer";
import Menu from "./components/common/Menu/Menu";
import Loader from "./components/utils/Loader/Loader";

const AppLayout = () => {
  const isFetching = useSelector((state) => state.products.loading);
  const [loadingImages, setLoadingImages] = useState(true); // Local state to track image loading
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchBlog());

    // Function to check when all images are loaded
    const handleImageLoad = () => {
      const images = document.querySelectorAll("img"); // Get all images on the page
      let loadedImages = 0;

      images.forEach((img) => {
        if (img.complete) {
          loadedImages += 1;
        } else {
          img.addEventListener("load", () => {
            loadedImages += 1;
            if (loadedImages === images.length) {
              setLoadingImages(false); // All images loaded
            }
          });
        }
      });

      if (loadedImages === images.length) {
        setLoadingImages(false); // In case all images are already loaded
      }
    };

    handleImageLoad(); // Call the function on component mount
  }, [dispatch]);

  // Check both API fetching and image loading states
  return (
    <>
      {isFetching || loadingImages ? (
        <Loader /> // Show loader until both API data and images are loaded
      ) : (
        <>
          <Menu />
          <Outlet />
          <Footer />
          <ScrollRestoration />
        </>
      )}
    </>
  );
};

export default AppLayout;
