import { FaHome, FaShoppingBag } from "react-icons/fa";
import { FaCartShopping, FaSquarePlus, FaUserGroup } from "react-icons/fa6";

const sidebarLinks = [
  {
    name: "Dashboard",
    icon: <FaHome />,
    path: "/admin/dashboard",
  },
  {
    name: "Products",
    icon: <FaShoppingBag />,
    path: "/admin/products",
  },
  {
    name: "Add Product",
    icon: <FaSquarePlus />,
    path: "/admin/add-product",
  },
  {
    name: "Orders",
    icon: <FaCartShopping />,
    path: "/admin/orders",
  },
  {
    name: "Customers",
    icon: <FaUserGroup />,
    path: "/admin/customers",
  },
];

export default sidebarLinks;
