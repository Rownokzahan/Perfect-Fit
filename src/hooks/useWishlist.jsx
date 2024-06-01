import { useSelector } from "react-redux";
import useDresses from "./useDresses";

const useWishlist = () => {
  const wishlistIdList = useSelector((state) => state.wishlist);
  const { dresses, isLoading, error } = useDresses();

  const wishlist = [];

  if (!isLoading || !error) {
    wishlistIdList?.forEach((id) => {
      const dress = dresses?.find((dress) => dress?._id === id);
      if (dress) {
        wishlist.push(dress);
      }
    });
  }

  return { wishlist, isLoading };
};

export default useWishlist;
