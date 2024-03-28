import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./view/page/Login/Login";
import NotFound from "./view/page/NotFound/NotFound";
import Product from "./view/page/Product/Product";
import ProductDetail from "./view/page/ProductDetail/ProductDetail";
import { useEffect } from "react";
import Cart from "./view/page/Cart/Cart";
import Home from "./view/page/Home/Home";
import Profile from "./view/page/Profile/Profile";
import LayoutAdmin from "./view/Layout/LayoutAdmin/LayoutAdmin";
import LayoutHomePage from "./view/Layout/LayoutHomePage/LayoutHomePage";
import { ThemeProvider, createTheme } from "@material-ui/core";
import ManageCategory from "./view/page/AdminPage/ManageCategory/ManageCategory";
import ManageProduct from "./view/page/AdminPage/ManageProduct/ManageProduct";
import ManageColor from "./view/page/AdminPage/ManageColor/ManageColor";
import ManageSize from "./view/page/AdminPage/ManageSize/ManageSize";
import Progress from "./view/page/Progress/Progress";
import Sale from "./view/page/AdminPage/Sale/Sale";

const theme = createTheme();

function App() {
  const getRoleAccount = async () => {
    if (window.location.pathname === "/login") {
      return;
    }
    if (!localStorage.getItem("accessToken")) {
      window.location.href = "/login";
    }
  };

  useEffect(() => {
    getRoleAccount();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutHomePage></LayoutHomePage>,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home></Home>,
        },
        {
          path: "/:id",
          element: <Product></Product>,
        },
        {
          path: "/:id/:id",
          element: <ProductDetail></ProductDetail>,
        },
        {
          path: "/cart",
          element: <Cart></Cart>,
        },
        {
          path: "/profile",
          element: <Profile></Profile>,
        },
        {
          path: "/progress",
          element: <Progress></Progress>,
        },
      ],
    },
    {
      path: "/admin",
      element: <LayoutAdmin></LayoutAdmin>,
      errorElement: <NotFound />,
      children: [
        {
          path: "/admin/list-products",
          element: <ManageProduct />,
        },
        {
          path: "/admin/category-product",
          element: <ManageCategory />,
        },
        {
          path: "/admin/colors",
          element: <ManageColor />,
        },
        {
          path: "/admin/sizes",
          element: <ManageSize />,
        },
        {
          path: "/admin/products",
          element: <Product></Product>,
        },
        {
          path: "/admin/sales",
          element: <Sale></Sale>,
        },
      ],
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
  ]);
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
