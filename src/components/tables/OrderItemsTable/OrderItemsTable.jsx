import OrderItemsTableRow from "./OrderItemsTableRow";

const OrderItemsTable = ({ items }) => {
  return (
    <table className="w-full table-auto">
      <thead className="text-secondary-black border-b">
        <tr>
          <td className="pb-4">item</td>
          <td className="pb-4">Name</td>
          <td className="pb-4">Style</td>
          <td className="pb-4">Measurements</td>
          <td className="pb-4">Price</td>
        </tr>
      </thead>

      <tbody className="divide-y">
        {items?.map((item) => (
          <OrderItemsTableRow key={item._id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default OrderItemsTable;
