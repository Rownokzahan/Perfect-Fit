import { MdDelete, MdEdit } from "react-icons/md";

const ProductCard = ({ product }) => {
  const { image, name, price } = product ?? {};
  return (
    <div className="border rounded group hover:shadow-lg duration-300">
      <div className="h-[280px] relative overflow-hidden">
        <img
          src={image}
          alt=""
          className="h-full w-full rounded-t object-cover"
        />
        <div className="absolute -bottom-10 w-full px-4 flex justify-between items-center opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all duration-300">
          <button className="w-24 py-1 px-2 rounded bg-primary-black text-primary-white font-semibold flex items-center justify-center gap-2">
            <MdEdit />
            Edit
          </button>
          <button className="w-24 py-1 px-2 rounded bg-red-600 text-primary-white font-semibold flex items-center justify-center gap-2">
            <MdDelete />
            Delete
          </button>
        </div>
      </div>
      <div className="p-4 rounded-b">
        <p className="text-sm font-medium truncate">{name}</p>
        <h5 className="font-semibold mt-1">${price}</h5>
      </div>
    </div>
  );
};

export default ProductCard;
