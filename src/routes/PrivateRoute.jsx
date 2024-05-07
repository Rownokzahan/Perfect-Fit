import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getCurrentUser } from "../redux/features/auth/authSlice";
import Spinner from "../components/ui/Spinner";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  const requestedPath = location?.pathname;

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  if (!loading && !user) {
    return <Navigate state={{ requestedPath }} to={"/login"} replace={true} />;
  }

  return children;
};

export default PrivateRoute;
