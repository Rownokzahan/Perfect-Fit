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
]);

export default routes;
