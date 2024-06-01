import AddProduct from "../../pages/AdminPages/AddProduct/AddProduct";
import Customers from "../../pages/AdminPages/Customers/Customers";
import Dashboard from "../../pages/AdminPages/Dashboard/Dashboard";
import EditProduct from "../../pages/AdminPages/EditProduct/EditProduct";
import Orders from "../../pages/AdminPages/Orders/Orders";
import Products from "../../pages/AdminPages/Products/Products";

const AdminRoutes = [
  {
    // Route for the admin dashboard
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    // Route for viewing all products
    path: "products",
    element: <Products />,
  },
  {
    // Route for editing a specific product by its ID
    path: "products/:product_id/edit",
    element: <EditProduct />,
  },
  {
    // Route for adding a new product
    path: "add-product",
    element: <AddProduct />,
  },
  {
    // Route for viewing all orders
    path: "orders",
    element: <Orders />,
  },
  {
    // Route for viewing all customers
    path: "customers",
    element: <Customers />,
  },
];

export default AdminRoutes;
