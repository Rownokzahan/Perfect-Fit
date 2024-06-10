import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/ui/Spinner";
import useUser from "../hooks/useUser";
import toast from "react-hot-toast";

let toastShown = false;

const PrivateRoute = ({ children }) => {
  const { isUserloading, user } = useUser();
  const location = useLocation();
  const requestedPath = location?.pathname;

  if (isUserloading) {
    return <Spinner />;
  }

  if (!isUserloading && !user) {
    if (!toastShown) {
      toast("Please login first to view the page", {
        icon: "ⓘ",
      });
      toastShown = true;
    }

    return (
      <Navigate state={{ requestedPath }} to={"/auth/login"} replace={true} />
    );
  }

  toastShown = false; // Reset toastShown when user is authenticated

  return children;
};

export default PrivateRoute;
