import { useDispatch } from "react-redux";
import useUser from "../../../../hooks/useUser";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../../../../redux/features/auth/authSlice";
import { IoPersonOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import ActiveLink from "./ActiveLink";

const UserProfileLinks = ({ toggleNavbar }) => {
  const { user } = useUser();

  const dispatch = useDispatch();
  const loaction = useLocation();
  const isMyOrdersPage = loaction.pathname === "/my-orders";

  // Function to handle logout
  const handleLogout = () => {
    dispatch(logout());
    toggleNavbar();
  };

  return (
    <>
      {user ? (
        <>
          {/* For larger screen display */}
          <div className="hidden lg:block relative group">
            {/* User profile picture or icon */}
            {user?.image ? (
              <img
                src={user?.image}
                alt=""
                className={`w-8 h-8 p-px rounded-full border ${
                  isMyOrdersPage ? "border-primary" : ""
                }`}
              />
            ) : (
              <IoPersonOutline
                className={`${isMyOrdersPage ? "text-primary" : ""}`}
              />
            )}

            {/* Highlight line under image/icon on "My Orders" page for larger screen */}
            {isMyOrdersPage && (
              <span
                className={`hidden lg:block w-full h-[2px] rounded-full bg-primary absolute z-10 -bottom-2`}
              ></span>
            )}

            {/* Dropdown menu for logged-in user */}
            <div className="hidden group-hover:block overflow-hidden absolute z-20 right-px top-6 duration-300 border-t-8 border-transparent tracking-wider">
              <div className="grid gap-4 p-4 bg-white shadow rounded-sm text-sm text-primary-black font-medium">
                {/* Link to "My Orders" page */}
                <Link to={"/my-orders"}>
                  <span
                    className={`${
                      isMyOrdersPage
                        ? "pb-1 border-b-2 border-primary text-primary font-medium"
                        : ""
                    }`}
                  >
                    My Orders
                  </span>
                </Link>
                {/* Logout button */}
                <button
                  className="flex gap-1 items-center bg-black text-primary-white px-2 py-1 rounded"
                  onClick={handleLogout}
                >
                  <MdLogout />
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* For smaller screen display */}
          <div className="lg:hidden grid">
            <div className="p-4 border-b">
              <ActiveLink to={"/my-orders"} toggleNavbar={toggleNavbar}>
                My Orders
              </ActiveLink>
            </div>
            <button
              className="lg:hidden button-black-solid w-max flex items-center gap-1 m-4"
              onClick={handleLogout}
            >
              <MdLogout />
              Logout
            </button>
          </div>
        </>
      ) : (
        // Login button for users who are not logged in
        <div className="m-4 lg:m-0 lg:-mt-1">
          <a
            href="/auth/login"
            className="text-base font-medium bg-primary text-primary-white py-2 px-4 rounded"
          >
            Login
          </a>
        </div>
      )}
    </>
  );
};

export default UserProfileLinks;
