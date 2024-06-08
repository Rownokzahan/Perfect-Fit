import DressAssembler from "../shared/DressAssembler";

const OrderItemCard = ({ item }) => {
  const {
    image,
    name,
    Bodice,
    Sleeve,
    "Skirt Style": SkirtStyle,
    Chest,
    Waist,
    Height,
    "Arm Length": ArmLength,
    price,
  } = item || {};

  return (
    <div key={name} className="grid grid-cols-5 gap-4 py-6 items-start text-sm">
      <div className="w-full col-span-2">
        {image === "Custom Dress" ? (
          <DressAssembler bodice={Bodice} sleeve={Sleeve} skirt={SkirtStyle} />
        ) : (
          <img src={image} className="w-full rounded object-cover" alt={name} />
        )}
      </div>

      <div className="space-y-2 col-span-3">
        <h5 className="truncate font-medium">{name}</h5>
        <div className="text-xs">
          <h6 className="font-medium">Style</h6>
          <p>Bodice: {Bodice}</p>
          <p>Sleeve: {Sleeve}</p>
          <p>Skirt Style: {SkirtStyle}</p>
        </div>

        <div className="text-xs">
          <h6 className="font-medium">Size</h6>
          <p>Chest: {Chest}</p>
          <p>Waist: {Waist}</p>
          <p>Height: {Height}</p>
          <p>Arm Length: {ArmLength}</p>
        </div>

        <h6 className="font-medium">${price}</h6>
      </div>
    </div>
  );
};

export default OrderItemCard;
