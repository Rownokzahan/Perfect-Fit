import { useState } from "react";
import CheckoutForm from "../../../components/forms/CheckoutForm";
import PlaceOrderModal from "../../../components/modals/PlaceOrderModal";
import Container from "../../../components/ui/Container";
import Spinner from "../../../components/ui/Spinner";
import useCart from "../../../hooks/useCart";
import useTitle from "../../../hooks/useTitle";
import NothingToCheckout from "../../ErrorPages/NothingToCheckout";
import InYourBag from "./components/InYourBag";

const Checkout = () => {
  useTitle("Checkout");
  const { cartItems, totalPrice, isLoading } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isLoading) {
    return <Spinner />;
  }

  if (!isModalOpen && cartItems?.length === 0) {
    return <NothingToCheckout />;
  }

  return (
    <Container marginTop={12}>
      <h4 className="font-semibold text-3xl text-center mb-8">Checkout</h4>
      <div className="grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-6 order-last lg:order-none">
          <h5 className="font-semibold text-xl">Delivery Info</h5>
          <CheckoutForm setIsModalOpen={setIsModalOpen} />
        </div>
        <InYourBag cartItems={cartItems} totalPrice={totalPrice} />
      </div>

      <PlaceOrderModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </Container>
  );
};

export default Checkout;
