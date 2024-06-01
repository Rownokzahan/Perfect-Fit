import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/ui/Spinner";
import useUser from "../hooks/useUser";

const PrivateRoute = ({ children }) => {
  const { isUserloading, user } = useUser();
  const location = useLocation();
  const requestedPath = location?.pathname;

  if (isUserloading) {
    return <Spinner />;
  }

  if (!isUserloading && !user) {
    return <Navigate state={{ requestedPath }} to={"/auth/login"} replace={true} />;
  }

  return children;
};

export default PrivateRoute;
