import { useSelector } from "react-redux";
import ActiveLink from "./ActiveLink";
import useCart from "../../../../hooks/useCart";
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi";

const BadgeLinks = ({ toggleNavbar }) => {
  const wishlist = useSelector((state) => state.wishlist);
  const { cartItems, isLoading } = useCart();

  return (
    <>
      <ActiveLink
        to={"/wishlist"}
        hasBadge={true}
        badge={wishlist?.length ? wishlist?.length : 0}
        toggleNavbar={toggleNavbar}
      >
        <HiOutlineHeart />
      </ActiveLink>

      <ActiveLink
        to={"/cart"}
        hasBadge={true}
        badge={cartItems?.length && !isLoading ? cartItems?.length : 0}
        toggleNavbar={toggleNavbar}
      >
        <HiOutlineShoppingBag />
      </ActiveLink>
    </>
  );
};

export default BadgeLinks;
