import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./AppLayout";
import ShopOverview from "./pages/ShopOverview/ShopOverview";
import CartSummary from "./pages/CartSummary/CartSummary";
import ContactPage from "./pages/ContactPage/ContactPage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { getBlog, getProduct } from "./services/apiProducts";
import ShopOverviewRightSidebar from "./pages/ShopOverview/ShopOverviewRightSidebar";
import ShopOverviewFullWidth from "./pages/ShopOverview/ShopOverviewFullWidth";
import ShopOverviewBreadcrumb2 from "./pages/ShopOverview/ShopOverviewBreadcrumb2";
import AboutUs from "./pages/AboutUs/AboutUs";
import FAQPage from "./pages/FAQPage/FAQPage";
import NotFound from "./pages/NotFound/NotFound";
import BlogGridLayout from "./pages/BlogGridLayout/BlogGridLayout";
import BlogMasonry from "./pages/BlogMasonry/BlogMasonry";
import BlogList from "./pages/BlogList/BlogList";
import BlogSimple from "./pages/BlogSimple/BlogSimple";
import BlogDetailPage from "./pages/BlogDetailPage/BlogDetailPage";

// Define your routes
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      // Shop Standard
      {
        path: "/all-products",
        element: <ShopOverview />,
      },
      // Shop List
      {
        path: "/list-shop",
        element: <ShopOverview defaultColumns={2} />,
      },
      // Shop: Left Sidebar
      {
        path: "/shop-left-sidebar",
        element: <ShopOverview />,
      },
      // Shop: Right Sidebar
      {
        path: "/shop-right-sidebar",
        element: <ShopOverviewRightSidebar />,
      },
      // Shop: Right Sidebar
      {
        path: "/full-width",
        element: <ShopOverviewFullWidth />,
      },
      // Shop: Breadcrumb 1
      {
        path: "/breadcrumb-1",
        element: <ShopOverview />,
      },
      // Shop: Breadcrumb 2
      {
        path: "/breadcrumb-2",
        element: <ShopOverviewBreadcrumb2 />,
      },
      // Product Detail Page
      {
        path: "/shop/:slug",
        element: <ProductDetail />,
        loader: ({ params }) => {
          return getProduct(params.slug);
        },
      },
      // Shop filtred by category
      {
        path: "/product-category/:category",
        element: <ShopOverview dispatchAction={true} />,
      },
      // Cart Summary
      {
        path: "/cart-summary",
        element: <CartSummary />,
      },
      // Search Page
      {
        path: "/search/:category/:query",
        element: <ShopOverview dispatchAction={true} />,
      },
      // Contact Page
      {
        path: "/contact",
        element: <ContactPage />,
      },
      // About Us Page
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      // FAQ Us Page
      {
        path: "/faq",
        element: <FAQPage />,
      },
      // Different Blog Options
      {
        path: "/blog-grid-layout",
        element: <BlogGridLayout />,
      },
      {
        path: "/blog-masonry",
        element: <BlogMasonry />,
      },
      {
        path: "/blog-list",
        element: <BlogList />,
      },
      {
        path: "/blog-simple",
        element: <BlogSimple />,
      },
      // Blog Detail
      {
        path: "/blog/:slug",
        element: <BlogDetailPage dispatchAction={true} />,
        loader: ({ params }) => {
          return getBlog(params.slug);
        },
      },
    ],
  },
]);

const App = () => (
  <>
    <GlobalStyles />
    <RouterProvider router={router} />
  </>
);

export default App;
