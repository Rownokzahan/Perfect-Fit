import { RiDeleteBinLine } from "react-icons/ri";

const CartTable = ({ cartItems }) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b">
          <td className="pb-4 uppercase text-sm text-secondary-black">Item</td>
          <td className="pb-4 uppercase text-sm text-secondary-black">Price</td>
          <td className="pb-4 uppercase text-sm text-secondary-black">Qty</td>
          <td className="pb-4 uppercase text-sm text-secondary-black"></td>
        </tr>
      </thead>
      <tbody className="divide-y">
        {cartItems?.map((item) => (
          <tr key={item._id}>
            <td className="px-4 py-8">
              <div className="flex gap-8">
                <img src={item.dress.image} className="max-h-[220px]" alt="" />
                <div className="space-y-4">
                  <h5>{item.dress.name}</h5>
                  <div className="text-sm">
                    <h6 className="font-medium">Style</h6>
                    <p>Bodice: {item.Bodice}</p>
                    <p>Sleeve: {item.Sleeve}</p>
                    <p>Skirt Style: {item["Skirt Style"]}</p>
                  </div>
                  <div className="text-sm">
                    <h6 className="font-medium">Size</h6>
                    <p>Chest: {item.Chest}</p>
                    <p>Waist: {item.Waist}</p>
                    <p>Long: {item.Long}</p>
                  </div>
                </div>
              </div>
            </td>
            <td className="px-4 py-8">
              <h4 className="font-medium">${item.dress.price}</h4>
            </td>
            <td className="px-4 py-8">
              <p className="py-2 px-4 border w-max">1</p>
            </td>
            <td className="px-4 py-8">
              <button className="text-xl text-red-600">
                <RiDeleteBinLine />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
