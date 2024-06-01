import Cart from "../../pages/UserPages/Cart/Cart";
import CustomDress from "../../pages/UserPages/CustomDress/CustomDress";
import Customize from "../../pages/UserPages/Customize/Customize";
import Dresses from "../../pages/UserPages/Dresses/Dresses";
import Home from "../../pages/UserPages/Home/Home";
import Wishlist from "../../pages/UserPages/Wishlist/Wishlist";
import PrivateRoute from "../PrivateRoute";

const UserRoutes = [
  {
    // Route for the home page
    path: "/",
    element: <Home />,
  },
  {
    // Route for viewing all dresses
    path: "/dresses",
    element: <Dresses />,
  },
  {
    // Route for creating a custom dress, protected by PrivateRoute
    path: "/custom-dress",
    element: (
      <PrivateRoute>
        <CustomDress />
      </PrivateRoute>
    ),
  },
  {
    // Route for customizing a specific dress by its ID, protected by PrivateRoute
    path: "/dresses/:dress_id/customize",
    element: (
      <PrivateRoute>
        <Customize />
      </PrivateRoute>
    ),
  },
  {
    // Route for viewing the cart, protected by PrivateRoute
    path: "/cart",
    element: (
      <PrivateRoute>
        <Cart />
      </PrivateRoute>
    ),
  },
  {
    // Route for viewing the wishlist, protected by PrivateRoute
    path: "/wishlist",
    element: (
      <PrivateRoute>
        <Wishlist />
      </PrivateRoute>
    ),
  },
];

export default UserRoutes;
