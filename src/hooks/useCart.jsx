import useUser from "./useUser";
import { useGetCartItemsByUserIdQuery } from "../redux/features/api/cartApi";

const useCart = () => {
  const { user } = useUser();
  const { data, isLoading, error } = useGetCartItemsByUserIdQuery(user?._id);

  let cartItems = [];
  let totalPrice = 0;

  if (!error && Array.isArray(data?.items)) {
    cartItems = data.items;
    totalPrice = cartItems.reduce((acc, item) => {
      const price = parseFloat(item.price);
      return acc + (isNaN(price) ? 0 : price);
    }, 0);
  }

  return { isLoading, cartItems, totalPrice };
};

export default useCart;
