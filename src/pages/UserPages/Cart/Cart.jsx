import { useSelector } from "react-redux";
import { useGetCartItemsByUserIdQuery } from "../../../redux/features/api/cartApi";
import Spinner from "../../../components/ui/Spinner";
import EmptyCart from "./components/EmptyCart";
import Container from "../../../components/ui/Container";
import CartTable from "../../../components/tables/CartTable/CartTable";
import CartCard from "../../../components/cards/CartCard";

const Cart = () => {
  const { user } = useSelector((state) => state.auth);
  const { data, isLoading, error } = useGetCartItemsByUserIdQuery(user?._id);

  if (isLoading) {
    return <Spinner />;
  }

  if (!data || data?.items?.length === 0 || error) {
    return <EmptyCart />;
  }

  return (
    <Container marginTop={12}>
      <div className="bg-white">
        <h3 className="font-medium p-4 sm:p-6 pb-0">
          Your Shopping Bag
          <span className="font-normal text-sm text-secondary-black ps-2">
            {data?.items?.length} items
          </span>
        </h3>

        {/* Table view after the `:sm` breakpoint */}
        <div className="hidden sm:block mt-6">
          <CartTable cartItems={data?.items} />
        </div>

        {/* Card view up to the `:sm` breakpoint */}
        <div className="sm:hidden divide-y border-t mt-4">
          {data?.items?.map((item) => (
            <CartCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Cart;
