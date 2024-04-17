import { IoIosArrowDown } from "react-icons/io";

const sortOptions = [
  { name: "Newest", key: "newest" },
  { name: "Best Selling", key: "best_selling" },
  { name: "Price Low to High", key: "price_low_to_high" },
  { name: "Price High to Low", key: "price_high_to_low" },
  { name: "A - Z", key: "a_to_z" },
  { name: "Z - A", key: "z_to_a" },
];

const SortBy = ({
  sortBy,
  handleSortChange,
  showSortDropdown,
  setShowSortDropdown,
}) => {
  return (
    <div className="flex items-center gap-4">
      <h5>Sort By:</h5>
      <div className="relative font-medium group">
        <button
          className="button-black-outline w-40 sm:w-48 text-left font-medium relative"
          onClick={() => setShowSortDropdown(!showSortDropdown)}
        >
          {sortOptions.find((option) => option.key === sortBy)?.name}
          <IoIosArrowDown className="absolute right-3 top-1/2 -translate-y-1/2" />
        </button>

        {/* Dropdown Menu */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 z-10 ${
            showSortDropdown ? "h-80" : "h-0"
          } overflow-hidden transition-height ease-out duration-200`}
        >
          <div className="w-max mt-4 bg-primary-white rounded shadow-lg divide-y grid">
            {sortOptions.map((item, index) => (
              <button
                key={item.key}
                className={`px-5 py-2 text-left ${
                  sortBy === item.key
                    ? "bg-primary-black text-primary-white"
                    : "hover:text-secondary-black duration-300"
                }${index === 0 ? " rounded-t" : ""}${
                  index === sortOptions.length - 1 ? " rounded-b" : ""
                }`}
                onClick={() => handleSortChange(item.key)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortBy;
