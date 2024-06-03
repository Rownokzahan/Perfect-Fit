const Checkout = ({ totalPrice }) => {
  return (
    <div className="p-4 sm:p-6 bg-white h-max sticky top-16 space-y-4">
      <div className="flex justify-between items-center">
        <p>Subtotal</p>
        <span>${totalPrice}</span>
      </div>
      <div className="flex justify-between items-center">
        <p>Shipping Charges</p>
        <span>$15</span>
      </div>

      <div className="flex justify-between items-center py-4 border-y font-medium">
        <p>Estimated Total</p>
        <span className="">${totalPrice + 15}</span>
      </div>

      <a
        href={"/cart/checkout"}
        className="button-black-solid w-full block text-center"
      >
        Proceed to Checkout
      </a>
    </div>
  );
};

export default Checkout;
