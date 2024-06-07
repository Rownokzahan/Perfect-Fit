import { NavLink } from "react-router-dom";

const ActiveUserLink = ({ to, children, hasBadge = false, badge }) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <span className={`${isActive ? "text-primary" : ""} relative`}>
          {children}
          {hasBadge && (
            <span
              className={`absolute -top-2 -right-2 h-4 w-4 shadow flex justify-center items-center rounded-full  ${
                isActive ? "bg-primary" : "bg-primary-black"
              } text-primary-white text-xs font-medium`}
            >
              {badge}
            </span>
          )}

          {isActive && (
            <span
              className={`hidden lg:block w-[110%] h-[2px] rounded-full bg-primary absolute -bottom-[21px]`}
            ></span>
          )}
        </span>
      )}
    </NavLink>
  );
};

export default ActiveUserLink;
