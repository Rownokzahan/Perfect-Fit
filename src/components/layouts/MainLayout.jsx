import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="max-w-[1536px] mx-auto bg-primary-white text-primary-black text-sm sm:text-base">
      <Outlet />
      <Toaster />
    </div>
  );
};

export default MainLayout;
