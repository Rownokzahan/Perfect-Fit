import { Outlet } from "react-router-dom";
import Sidebar from "../shared/Sidebar/Sidebar";
import TopBar from "../shared/TopBar";

const AdminLayout = () => {
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="w-full">
          <TopBar />
          <div className="py-6 px-[3%] min-h-[88vh]">
            <Outlet />
          </div>
          <footer className="py-6 px-[3%]">Footer</footer>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
