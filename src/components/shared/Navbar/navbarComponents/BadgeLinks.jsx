import { useSelector } from "react-redux";
import ActiveLink from "./ActiveLink";
import useCart from "../../../../hooks/useCart";
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi";

const BadgeLinks = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const { cartItems, isLoading } = useCart();

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
    </>
  );
};

export default BadgeLinks;
