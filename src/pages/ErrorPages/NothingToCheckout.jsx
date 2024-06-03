import { TbShoppingBagSearch } from "react-icons/tb";

const NothingToCheckout = () => {
  return (
    <div className="mt-24 text-center">
      <TbShoppingBagSearch className="text-8xl mx-auto mb-8" />
      <h3 className="text-xl font-semibold mb-2">Nothing to Checkout</h3>
      <p className="mb-12">
        Please add somthing to your shopping bag then checkout
      </p>
      <a href="/dresses" className="button-black-solid">
        Continue Shopping
      </a>
    </div>
  );
};

export default NothingToCheckout;