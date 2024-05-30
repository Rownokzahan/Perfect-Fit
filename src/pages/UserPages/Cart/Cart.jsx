import useCart from "../../../hooks/useCart";
import Spinner from "../../../components/ui/Spinner";
import EmptyCart from "./components/EmptyCart";
import Container from "../../../components/ui/Container";
import CartTable from "../../../components/tables/CartTable/CartTable";
import CartCard from "../../../components/cards/CartCard";

const Cart = () => {
  const { cartItems, isLoading, error } = useCart();

  if (isLoading) {
    return <Spinner />;
  }

  if (!cartItems || cartItems?.length === 0 || error) {
    return <EmptyCart />;
  }

  return (
    <Container marginTop={12}>
      <div className="bg-white">
        <h3 className="font-medium p-4 sm:p-6 pb-0">
          Your Shopping Bag
          <span className="font-normal text-sm text-secondary-black ps-2">
            {cartItems?.length} items
          </span>
        </h3>

        {/* Table view after the `:sm` breakpoint */}
        <div className="hidden sm:block mt-6">
          <CartTable cartItems={cartItems} />
        </div>

        {/* Card view up to the `:sm` breakpoint */}
        <div className="sm:hidden divide-y border-t mt-4">
          {cartItems?.map((item) => (
            <CartCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Cart;
