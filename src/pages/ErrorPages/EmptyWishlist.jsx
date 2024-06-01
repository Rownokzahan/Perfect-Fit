import { BsSearchHeart } from "react-icons/bs";

const EmptyWishlist = () => {
  return (
    <div className="mt-24 text-center">
      <BsSearchHeart className="text-8xl mx-auto mb-8" />
      <h3 className="text-xl font-semibold mb-2">Empty Wishlist</h3>
      <p className="mb-12">
        Looks like you haven&apos;t added anything to your wishlist
      </p>
      <a href="/dresses" className="button-black-solid">
        Continue Shopping
      </a>
    </div>
  );
};

export default EmptyWishlist;