import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Error404 from "../pages/ErrorPages/Error404";
import UserLayout from "../components/layouts/UserLayout";
import UserRoutes from "./routeComponents/UserRoutes";
import AuthLayout from "../components/layouts/AuthLayout";
import AuthRoutes from "./routeComponents/AuthRoutes";
import AdminLayout from "../components/layouts/AdminLayout";
import AdminRoutes from "./routeComponents/AdminRoutes";

const Routes = createBrowserRouter([
  {
    // Root route
    path: "/",
    element: <MainLayout />,
    // errorElement: <Error404/>,
    children: [
      {
        // Routes for all users
        path: "/",
        element: <UserLayout />,
        children: UserRoutes,
      },
      {
        // Routes for authentication
        path: "/auth",
        element: <AuthLayout />,
        children: AuthRoutes,
      },
      {
        // Routes for admin section
        path: "/admin",
        element: <AdminLayout />,
        children: AdminRoutes,
      },
    ],
  },
]);

export default Routes;
