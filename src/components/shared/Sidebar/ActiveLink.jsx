import { NavLink, useLocation } from "react-router-dom";

const ActiveLink = ({ item }) => {
  const { path, name, icon } = item ?? {};
  const location = useLocation();
  const isActive = location.pathname === path;
  return (
    <NavLink to={path}>
      <div
        className={`flex items-center gap-4 p-3 rounded ${
          isActive ? "bg-primary-white" : "hover:bg-gray-100"
        }`}
      >
        <div
          className={`text-xl ${
            isActive ? "text-primary" : "text-secondary-black"
          }`}
        >
          {icon}
        </div>
        {name}
      </div>
    </NavLink>
  );
};

export default ActiveLink;
