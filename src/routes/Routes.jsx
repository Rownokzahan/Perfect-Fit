import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../components/layouts/UserLayout";
import Home from "../pages/UserPages/Home/Home";
import Dresses from "../pages/UserPages/Dresses/Dresses";
import CustomDress from "../pages/UserPages/CustomDress/CustomDress";
import Customize from "../pages/UserPages/Customize/Customize";
import Cart from "../pages/UserPages/Cart/Cart";
import Wishlist from "../pages/UserPages/Wishlist/Wishlist";
import AuthLayout from "../components/layouts/AuthLayout";
import Signup from "../pages/Auth/Signup";
import Login from "../pages/Auth/Login";
import AdminLayout from "../components/layouts/AdminLayout";
import Dashboard from "../pages/AdminPages/Dashboard/Dashboard";
import Products from "../pages/AdminPages/Products/Products";
import AddProduct from "../pages/AdminPages/AddProduct/AddProduct";
import Orders from "../pages/AdminPages/Orders/Orders";
import Customers from "../pages/AdminPages/Customers/Customers";
import EditProduct from "../pages/AdminPages/EditProduct/EditProduct";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dresses",
        element: <Dresses />,
      },
      {
        path: "/custom-dress",
        element: <CustomDress />,
      },
      {
        path: "/dresses/:dress_id/customize",
        element: <Customize />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "edit-product",
        element: <EditProduct />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
    ],
  },
]);

export default routes;
