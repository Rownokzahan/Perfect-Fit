import { FaRegHeart } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";

const DressCard = ({ dress, status = "" }) => {
  return (
    <div className="relative overflow-hidden group mb-4">
      <div onClick={()=>console.log("you clicked on buy")} className="relative overflow-hidden h-52 md:h-96 mb-2 md:mb-4 cursor-pointer">
        <img
          src={dress.image}
          alt={dress.name}
          className="w-full h-full object-cover scale-100 group-hover:scale-105 duration-300"
        />
        {/* Buy Now Button */}
        <button className="button-white absolute -bottom-2 group-hover:bottom-4 right-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          Buy Now
        </button>
      </div>

      <div className="font-semibold space-y-1 md:space-y-2">
        <h4 className="md:text-lg">{dress.name}</h4>
        <h5>${dress.price}</h5>
      </div>

      {/* Status */}
      {status !== "" && (
        <div className="bg-primary-black text-primary-white font-medium px-2 py-px absolute top-4 left-4">
          {status}
        </div>
      )}

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
