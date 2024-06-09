import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children, hasBadge = false, badge }) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <span className={`${isActive ? "text-primary" : ""} relative`}>
          <span className={`${isActive ? "font-medium" : ""}`}>{children}</span>

          {hasBadge && (
            <span
              className={`absolute -top-2 left-4 h-4 w-4 shadow flex justify-center items-center rounded-full bg-primary text-primary-white text-xs font-medium`}
            >
              {badge}
            </span>
          )}

          {isActive && (
            <span
              className={`hidden lg:block w-full h-[2px] rounded-full bg-primary absolute z-10 top-[34px]`}
            ></span>
          )}
        </span>
      )}
    </NavLink>
  );
};

export default ActiveLink;
