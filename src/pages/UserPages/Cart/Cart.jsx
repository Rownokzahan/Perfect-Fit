import Container from "../../../components/ui/Container";
import CartTable from "../../../components/tables/CartTable";
import CartCard from "../../../components/cards/CartCard";
import cartItems from "../../../data/cartItems";

const Cart = () => {
  const hasCartItems =
    cartItems && Array.isArray(cartItems) && cartItems.length > 0;

  return (
    <Container marginTop={12}>
      {hasCartItems ? (
        <div className="bg-white p-8">
          <h3 className="font-medium">
            Your Shopping Bag
            <span className="font-normal text-sm text-secondary-black ps-2">
              {cartItems.length} items
            </span>
          </h3>

          {/* Table view after the `:sm` breakpoint */}
          <div className="hidden sm:block mt-6">
            <CartTable cartItems={cartItems} />
          </div>

          {/* Card view up to the `:sm` breakpoint */}
          <div className="sm:hidden divide-y space-y-8">
            {cartItems.map((item) => (
              <CartCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      ) : (
        "Your Shopping Bag is Empty"
      )}
    </Container>
  );
};

export default Cart;
