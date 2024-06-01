import { useSelector } from "react-redux";
import useCart from "../../../../hooks/useCart";
import ActiveLink from "./ActiveLink";
import {
  HiOutlineHeart,
  HiOutlineShoppingBag,
  HiOutlineUserCircle,
} from "react-icons/hi";

const UserNavItems = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const { cartItems, isLoading } = useCart();

  return (
    <>
      <ActiveLink to={"/admin/dashboard"}>
        <div>
          <HiOutlineUserCircle />
        </div>
      </ActiveLink>
      <ActiveLink to={"/wishlist"}>
        <div className="relative">
          <HiOutlineHeart />
          <span className="absolute -top-2 -right-2 text-xs bg-primary px-1 rounded-full font-medium">
            {wishlist?.length ? wishlist?.length : 0}
          </span>
        </div>
      </ActiveLink>
      <ActiveLink to={"/cart"}>
        <div className="relative">
          <HiOutlineShoppingBag />
          <span className="absolute -top-2 -right-2 text-xs bg-primary px-1 rounded-full font-medium">
            {cartItems?.length && !isLoading ? cartItems?.length : 0}
          </span>
        </div>
      </ActiveLink>
    </>
  );
};

export default UserNavItems;
