import { NavLink } from "react-router-dom";

const ActiveLink = ({
  to,
  children,
  hasBadge = false,
  badge,
  toggleNavbar = () => {},
}) => {
  return (
    <NavLink to={to} onClick={toggleNavbar}>
      {({ isActive }) => (
        <span
          className={`${isActive ? "text-primary font-medium" : ""} relative`}
        >
          {children}

          {hasBadge && (
            <span className="absolute -top-2 left-4 h-4 w-4 shadow flex justify-center items-center rounded-full bg-primary text-primary-white text-xs">
              {badge}
            </span>
          )}

          {isActive && (
            <span
              className={`hidden lg:block w-full h-[2px] rounded-full bg-primary absolute z-20 -bottom-[15px]`}
            ></span>
          )}
        </span>
      )}
    </NavLink>
  );
};

export default ActiveLink;
