import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../../redux/features/auth/authSlice";

import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
    console.log("I am here");
  }, [dispatch]);

  return (
    <div className="max-w-[1536px] mx-auto bg-primary-white text-primary-black text-sm sm:text-base">
      <Outlet />
      <Toaster />
    </div>
  );
};

export default MainLayout;
