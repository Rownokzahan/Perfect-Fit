import { useDispatch, useSelector } from "react-redux";
import useCart from "../../../../hooks/useCart";
import useUser from "../../../../hooks/useUser";
import ActiveLink from "./ActiveLink";
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi";
import { MdLogout } from "react-icons/md";
import { logout } from "../../../../redux/features/auth/authSlice";
import { IoPersonOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const UserNavItems = () => {
  const { user } = useUser();
  const wishlist = useSelector((state) => state.wishlist);
  const { cartItems, isLoading } = useCart();
  const dispatch = useDispatch();
  const loaction = useLocation();

  // Function to handle logout
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <ActiveLink
        to={"/wishlist"}
        hasBadge={true}
        badge={wishlist?.length ? wishlist?.length : 0}
      >
        <HiOutlineHeart />
      </ActiveLink>

      <ActiveLink
        to={"/cart"}
        hasBadge={true}
        badge={cartItems?.length && !isLoading ? cartItems?.length : 0}
      >
        <HiOutlineShoppingBag />
      </ActiveLink>

      {user ? (
        <>
          <div className="relative group">
            {/* User profile picture or icon */}
            {user?.image ? (
              <img
                src={user.image}
                alt=""
                className="w-8 h-8 rounded-full border"
              />
            ) : (
              <IoPersonOutline
                className={`${
                  loaction.pathname === "/my-orders" ? "text-primary" : ""
                }`}
              />
            )}

            {/* Highlight line under icon when on the "My Orders" page */}
            {loaction.pathname === "/my-orders" && (
              <span
                className={`hidden lg:block w-full h-[2px] rounded-full bg-primary absolute z-10 top-[34px]`}
              ></span>
            )}

            {/* Dropdown menu for logged-in user */}
            <div className="hidden group-hover:block overflow-hidden absolute z-20 right-px top-6 duration-300 border-t-8 border-transparent ">
              <div className="grid gap-4 p-4 bg-white shadow rounded-sm text-sm text-primary-black font-medium">
                {/* Link to "My Orders" page */}
                <a
                  href="/my-orders"
                  className={` whitespace-nowrap text-center hover:underline hover:underline-offset-4 duration-300`}
                >
                  My Orders
                </a>
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
        </>
      ) : (
        // Login button for users who are not logged in
        <div className="-mt-1">
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

export default UserNavItems;
