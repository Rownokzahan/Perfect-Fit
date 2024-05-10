import CartTableRow from "./CartTableRow";

const CartTable = ({ cartItems }) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b">
          <td className="px-6 pb-4 uppercase text-sm text-secondary-black">
            Item
          </td>
          <td className="px-6 pb-4 uppercase text-sm text-secondary-black">
            Price
          </td>
          <td className="px-6 pb-4 uppercase text-sm text-secondary-black">
            Qty
          </td>
          <td className="px-6 pb-4 uppercase text-sm text-secondary-black"></td>
        </tr>
      </thead>
      <tbody className="divide-y">
        {cartItems?.map((item) => (
          <CartTableRow key={item._id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
