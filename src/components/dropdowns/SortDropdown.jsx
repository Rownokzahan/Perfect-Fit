import { IoIosArrowDown } from "react-icons/io";
import dressSortOptions from "../../data/dressSortOptions";

const SortDropdown = ({
  selectedSorting,
  setSelectedSorting,
  isSortingDropdownOpen,
  setIsSortingDropdownOpen,
}) => {
  return (
    <div className="relative">
      <button
        className="relative w-48 px-4 py-2 rounded bg-primary-white text-sm text-left font-medium text-secondary-black"
        onClick={() => setIsSortingDropdownOpen(!isSortingDropdownOpen)}
      >
        {selectedSorting}
        <IoIosArrowDown className="absolute right-3 top-1/2 -translate-y-1/2" />
      </button>

      {/* Dropdown List */}
      <div
        className={`w-full mt-2 absolute z-10 ${
          isSortingDropdownOpen ? "h-80" : "h-0"
        } overflow-hidden transition-height ease-out duration-200`}
      >
        <div className="rounded shadow flex flex-col divide-y text-sm font-medium text-secondary-black bg-primary-white">
          {dressSortOptions?.map((option, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-left ${
                selectedSorting === option
                  ? "bg-primary-black text-primary-white"
                  : "hover:bg-white"
              } ${index === 0 ? "rounded-t" : ""} ${
                index === dressSortOptions?.length - 1 ? "rounded-b" : ""
              }`}
              onClick={() => {
                setSelectedSorting(option);
                setIsSortingDropdownOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortDropdown;
