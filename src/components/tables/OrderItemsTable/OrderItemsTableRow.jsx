import DressAssembler from "../../shared/DressAssembler";

const OrderItemsTableRow = ({ item }) => {
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
    <tr>
      <td className="align-top">
        <div className="max-w-24 pb-4">
          {image === "Custom Dress" ? (
            <DressAssembler
              bodice={Bodice}
              sleeve={Sleeve}
              skirt={SkirtStyle}
            />
          ) : (
            <img
              src={image}
              className="w-full object-cover rounded my-4"
              alt=""
            />
          )}
        </div>
      </td>
      <td className="align-top py-4 truncate">
        <p>{name}</p>
      </td>
      <td className="align-top py-4">
        <p>
          <span>Bodice:</span> {Bodice}
        </p>
        <p>
          <span>Sleeve:</span> {Sleeve}
        </p>
        <p>
          <span>Skirt Style:</span> {SkirtStyle}
        </p>
      </td>
      <td className="align-top py-4">
        <p>
          <span>Chest:</span> {Chest}
        </p>
        <p>
          <span>Waist:</span> {Waist}
        </p>
        <p>
          <span>Height:</span> {Height}
        </p>
        <p>
          <span>Arm Length:</span> {ArmLength}
        </p>
      </td>
      <td className="align-top py-4">
        <p>${price}</p>
      </td>
    </tr>
  );
};

export default OrderItemsTableRow;
