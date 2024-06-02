import { useState } from "react";
import useTitle from "../../../hooks/useTitle";
import useCart from "../../../hooks/useCart";
import useUser from "../../../hooks/useUser";
import { useRemoveFromCartMutation } from "../../../redux/features/api/cartApi";
import Spinner from "../../../components/ui/Spinner";
import EmptyCart from "../../ErrorPages/EmptyCart";
import Container from "../../../components/ui/Container";
import CartTable from "../../../components/tables/CartTable/CartTable";
import CartCard from "../../../components/cards/CartCard";
import Checkout from "./components/Checkout";
import RemoveFromCartModal from "../../../components/modals/RemoveFromCartModal";

const Cart = () => {
  useTitle("Cart");

  const { cartItems, isLoading, totalPrice } = useCart();
  const { user } = useUser();
  const [removeFromCart] = useRemoveFromCartMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle the opening of the remove from cart modal
  const handleRemoveFromCartModal = async (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Function to confirm the removal of an item from the cart
  const confirmRemoveFromCart = async () => {
    if (selectedItem) {
      await removeFromCart({ userId: user._id, itemId: selectedItem._id });
      setIsModalOpen(false);
      setSelectedItem(null);
    }
  };

  // Display a spinner while the cart items are loading
  if (isLoading) {
    return <Spinner />;
  }

  // Display an empty cart if there are no items in the cart
  if (cartItems?.length === 0) {
    return <EmptyCart />;
  }

  return (
    <Container marginTop={12}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white lg:col-span-2">
          <h3 className="font-medium p-4 sm:p-6 pb-0">
            Your Shopping Bag
            <span className="font-normal text-sm text-secondary-black ps-2">
              {cartItems?.length} items
            </span>
          </h3>

          {/* Table view for larger screens */}
          <div className="hidden sm:block mt-6">
            <CartTable
              cartItems={cartItems}
              handleRemoveFromCartModal={handleRemoveFromCartModal}
            />
          </div>

          {/* Card view for smaller screens */}
          <div className="sm:hidden divide-y border-t mt-4">
            {cartItems?.map((item) => (
              <CartCard
                key={item._id}
                item={item}
                handleRemoveFromCartModal={handleRemoveFromCartModal}
              />
            ))}
          </div>
        </div>

        {/* Checkout section */}
        <Checkout totalPrice={totalPrice} />
      </div>

      {/* Modal for confirming item removal */}
      <RemoveFromCartModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        confirmRemoveFromCart={confirmRemoveFromCart}
      />
    </Container>
  );
};

export default Cart;
