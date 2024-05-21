import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, image, name, price } = product ?? {};
  return (
    <div className="border rounded group hover:shadow-lg duration-300">
      <div
        className="h-[280px] w-full relative overflow-hidden bg-no-repeat bg-cover bg-center rounded-t"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute -bottom-10 w-full px-4 flex justify-between items-center opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all duration-300">
          <Link
            to={`/admin/products/${_id}/edit`}
            className="w-24 py-1 px-2 rounded bg-primary-black text-primary-white font-semibold flex items-center justify-center gap-2"
          >
            <MdEdit />
            Edit
          </Link>
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
