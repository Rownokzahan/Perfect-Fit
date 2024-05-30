import useUser from "./useUser";
import { useGetCartItemsByUserIdQuery } from "../redux/features/api/cartApi";

const useCart = () => {
  const { user } = useUser();
  const { data, isLoading, error } = useGetCartItemsByUserIdQuery(user?._id);

  return { cartItems: data?.items, isLoading, error };
};

export default useCart;
