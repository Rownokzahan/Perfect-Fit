import { IoSearch } from "react-icons/io5";
import CategoryDropdown from "../dropdowns/CategoryDropdown";
import SortDropdown from "../dropdowns/SortDropdown";

const Filters = () => {
  return (
    <div className="mb-12 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-between text-xs sm:text-sm">
      {/* Search bar */}
      <div className="relative w-full sm:w-48">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search..."
          className="w-full ps-4 pe-8 py-2 rounded text-secondary-black font-medium bg-white outline outline-1 outline-secondary-black/30"
        />
        <IoSearch className="absolute top-1/2 -translate-y-1/2 right-2 text-secondary-black" />
      </div>

      <div className="flex items-center gap-4 lg:gap-8 overflow-ellipsis">
        <CategoryDropdown />
        <SortDropdown />
      </div>
    </div>
  );
};

export default Filters;
