import { RiDeleteBinLine } from "react-icons/ri";

const CartCard = ({ item }) => {
  return (
    <div className="grid grid-cols-3 gap-4 pt-10 relative">
      <img src={item.dress.image} className="w-full max-h-[230px] object-cover" alt="" />
      <div className="space-y-2 col-span-2">
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

        <div className="flex items-center font-medium gap-2">
          <span>${item.dress.price}</span>
          <span>|</span>
          <span className="text-xs text-secondary-black mb-px">QTY - 1</span>
        </div>

        <button className="text-xl text-red-600 absolute bottom-0 right-0">
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
