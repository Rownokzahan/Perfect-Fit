import { FaRegHeart } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

const DressCard = ({ dress }) => {
  const { _id, name, price, image } = dress ?? {};

  return (
    <div className="bg-white rounded relative group">
      <Link to={`/dresses/${_id}/customize`}>
        <div className="relative overflow-hidden h-52 md:h-72 rounded-t cursor-pointer">
          <img
            src={image}
            alt={name}
            className="w-full h-52 md:h-96 rounded-t object-cover scale-100 group-hover:scale-110 duration-300"
          />
          {/* Customize Button */}
          <button className="button-white absolute -bottom-2 group-hover:bottom-4 right-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            Customize
          </button>
        </div>
      </Link>

      <div className="font-medium space-y-1 md:space-y-2 p-2 sm:p-4">
        <h4 className="truncate text-xs sm:text-sm">{name}</h4>
        <h5 className="text-sm sm:text-base">${price}</h5>
      </div>

      <div className="absolute top-4 -right-4 group-hover:right-4 opacity-0 group-hover:opacity-100 duration-300">
        <div className="group/wishlist relative">
          {/* Wislist Button*/}
          <button className="button-round-white">
            <FaRegHeart />
          </button>

          {/* Add to Wishlist tooltip */}
          <div className="absolute right-12 top-1/2 -translate-y-1/2 whitespace-nowrap scale-0 group-hover/wishlist:scale-100 opacity-0 group-hover/wishlist:opacity-100 transition-opacity duration-300">
            <div className="relative px-2 py-1 rounded bg-primary-white bg-opacity-70 text-sm font-medium">
              <span>Add to Wishlist</span>
              <BiSolidRightArrow className="absolute -right-[11px] top-1/2 -translate-y-1/2 text-primary-white text-opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressCard;
