import { useGetOrdersByUserIdQuery } from "../redux/features/api/orderApi";
import useUser from "./useUser";

const useMyOrders = () => {
  const { user } = useUser();
  const { data, isLoading, error } = useGetOrdersByUserIdQuery(user?._id);

  let orders = [];
  if (!error && Array.isArray(data?.orders)) {
    orders = data?.orders;
  }
  return { isLoading, orders };
};

export default useMyOrders;
