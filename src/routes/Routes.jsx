import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../components/layouts/UserLayout";
import Home from "../pages/UserPages/Home/Home";
import Dresses from "../pages/UserPages/Dresses/Dresses";
import Customize from "../pages/UserPages/Customize/Customize";
import Cart from "../pages/UserPages/Cart/Cart";

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
        path: "/dresses/:dress_id/customize",
        element: <Customize />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default routes;
