const InYourBag = ({ cartItems, totalPrice }) => {
  return (
    <div className="space-y-4 bg-gray-100/90 p-8">
      <div className="flex justify-between">
        <h4 className="font-semibold text-xl">In Your Bag</h4>
        <span className="font-normal text-base">{cartItems?.length} items</span>
      </div>

      <div className="flex justify-between items-center">
        <p>Subtotal</p>
        <span>${totalPrice}</span>
      </div>

      <div className="flex justify-between items-center">
        <p>Shipping Charges</p>
        <span>$15</span>
      </div>

      <div className="flex justify-between items-center">
        <p>Tax</p>
        <span>$0</span>
      </div>

      <div className="flex justify-between items-center py-4 border-t font-medium">
        <p>Total to Pay</p>
        <span>${totalPrice + 15}</span>
      </div>
    </div>
  );
};

export default InYourBag;
