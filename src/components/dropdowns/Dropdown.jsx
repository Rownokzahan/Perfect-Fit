import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation, useSearchParams } from "react-router-dom";

// Generalized Dropdown component
const Dropdown = ({ items, defaultLabel, paramKey }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  // Initialize selected item based on URL search parameters
  const [selectedItem, setSelectedItem] = useState(() => {
    const params = new URLSearchParams(location.search);
    const itemSlug = params.get(paramKey);
    if (itemSlug) {
      const item = items.find((item) => item.slug === itemSlug);
      return item ? item.name : defaultLabel;
    }
    return defaultLabel;
  });

  // Handle item selection
  const handleItemClick = (item) => {
    setSelectedItem(item.name); // Set the selected item name
    setIsDropdownOpen(false); // Close the dropdown menu

    // Update the URL search parameters based on the selected item
    searchParams.set(paramKey, item.slug);
    setSearchParams(searchParams);
  };

  return (
    <div className="relative">
      <button
        className="relative w-48 px-4 py-2 rounded bg-primary-white text-sm text-left font-medium text-secondary-black"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {selectedItem} {/* Display the selected item name */}
        <IoIosArrowDown className="absolute right-3 top-1/2 -translate-y-1/2" />
      </button>

      {/* Dropdown menu */}
      <div
        className={`w-full mt-2 absolute z-10 ${
          isDropdownOpen ? "h-80" : "h-0"
        } overflow-hidden transition-height ease-out duration-200`}
      >
        <div className="rounded shadow flex flex-col divide-y text-sm font-medium text-secondary-black bg-primary-white">
          {items.map((item, index) => (
            <button
              key={item._id}
              className={`px-4 py-2 text-left ${
                selectedItem === item.name
                  ? "bg-primary-black text-primary-white"
                  : "hover:bg-white"
              } ${index === 0 ? "rounded-t" : ""} ${
                index === items.length - 1 ? "rounded-b" : ""
              }`}
              onClick={() => handleItemClick(item)}
            >
              {item.name} {/* Display item name */}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
