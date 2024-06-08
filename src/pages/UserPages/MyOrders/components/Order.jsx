import OrderItemCard from "../../../../components/cards/OrderItemCard";
import OrderItemsTable from "../../../../components/tables/OrderItemsTable/OrderItemsTable";

const Order = ({ order }) => {
  const deliveryDate = new Date(order?.created_at);
  deliveryDate.setDate(deliveryDate.getDate() + 8); // 8 is the number of days to make order

  const formattedDeliveryDate = deliveryDate
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .replace(/(\d{1,2} \w+)( \d{4})/, "$1,$2");

  return (
    <div className="bg-white rounded">
      <div className="flex flex-col sm:flex-row gap-2 justify-between p-4 sm:p-6">
        <h5 className="font-medium flex gap-1">
          Order <span className="text-primary">#{order?._id}</span>
        </h5>
        <p className="text-xs sm:text-base">
          Estimate Delivery: <span className="text-primary-black">{formattedDeliveryDate}</span>
        </p>
      </div>

      {/* Table view for larger screens */}
      <div className="hidden sm:block px-6">
        <OrderItemsTable items={order?.items} />
      </div>

      {/* Card view for smaller screens */}
      <div className="sm:hidden divide-y px-4 border-t">
        {order?.items?.map((item) => (
          <OrderItemCard key={item._id} item={item} />
        ))}
      </div>

      <div className="p-4 sm:p-6 border-t flex justify-between">
        <h5 className="flex gap-1 items-center">
          <span className="font-medium">Total</span>
          <span className="text-secondary-black text-xs sm:text-sm">
            (with delivery charge)
          </span>
        </h5>

        <h5 className="font-bold">${order?.totalPrice + 15}</h5>
      </div>
    </div>
  );
};

export default Order;
