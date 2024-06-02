import { RiDeleteBinLine } from "react-icons/ri";
import DressAssembler from "../shared/DressAssembler";

const CartCard = ({ item, handleRemoveFromCartModal }) => {
  const {
    image,
    name,
    Bodice,
    Sleeve,
    "Skirt Style": SkirtStyle,
    Chest,
    Waist,
    Long,
    price,
  } = item || {};

  return (
    <div className="grid grid-cols-3 gap-4 py-8 relative items-center">
      {image === "Custom Dress" ? (
        <DressAssembler bodice={Bodice} sleeve={Sleeve} skirt={SkirtStyle} />
      ) : (
        <img src={image} className="w-full h-full rounded object-cover" alt="" />
      )}

      <div className="space-y-2 col-span-2">
        <h5>{name}</h5>

        <div className="text-sm">
          <h6 className="font-medium">Style</h6>
          <p>Bodice: {Bodice}</p>
          <p>Sleeve: {Sleeve}</p>
          <p>Skirt Style: {SkirtStyle}</p>
        </div>
        <div className="text-sm">
          <h6 className="font-medium">Size</h6>
          <p>Chest: {Chest}</p>
          <p>Waist: {Waist}</p>
          <p>Long: {Long}</p>
        </div>

        <div className="flex items-center font-medium gap-2">
          <span>${price}</span>
          <span>|</span>
          <span className="text-xs text-secondary-black mb-px">QTY - 1</span>
        </div>

        <button
          className="text-xl text-red-600 absolute bottom-6 right-4"
          onClick={() => handleRemoveFromCartModal(item)}
        >
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
