import { Link } from "react-router-dom";
import ProductCard from "../../../components/cards/ProductCard";
import Title from "../../../components/ui/Title";
import dresses from "../../../data/dresses";
import { useState } from "react";
import CategoryDropdown from "../../../components/dropdowns/CategoryDropdown";
import SortDropdown from "../../../components/dropdowns/SortDropdown";
import Pagination from "../../../components/ui/Pagination";

const Products = () => {
  // Check if dresses data exists and is valid
  const hasDresses = dresses && Array.isArray(dresses) && dresses.length > 0;

  // State variables for category dropdown
  const [selectedCategory, setSelectedCategory] = useState("All Dress");
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  // State variables for sorting dropdown
  const [selectedSorting, setSelectedSorting] = useState("Newest");
  const [isSortingDropdownOpen, setIsSortingDropdownOpen] = useState(false);

  // State variables for pagination
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the dresses array based on current page
  const currentDresses = dresses?.slice(startIndex, endIndex);

  return (
    <>
      {/* Title and Add Product link */}
      <div className="flex items-start justify-between">
        <Title position="left">Products</Title>
        <Link
          to={"/admin/add-product"}
          className="py-2 px-4 rounded bg-primary-black text-primary-white hover:bg-primary font-semibold whitespace-nowrap duration-300"
        >
          Add Product
        </Link>
      </div>
      {/* Search bar, category and sorting dropdowns */}
      <div className="bg-white border rounded">
        <div className="p-8 border-b flex items-center justify-between">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search..."
            className="text-sm font-medium px-4 py-2 rounded border-2 border-primary-white bg-primary-white focus:bg-white focus:outline-none"
          />
          <div className="flex items-center gap-8">
            {/* Category dropdown */}
            <CategoryDropdown
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              isCategoryDropdownOpen={isCategoryDropdownOpen}
              setIsCategoryDropdownOpen={setIsCategoryDropdownOpen}
            />
            {/* Sorting dropdown */}
            <SortDropdown
              selectedSorting={selectedSorting}
              setSelectedSorting={setSelectedSorting}
              isSortingDropdownOpen={isSortingDropdownOpen}
              setIsSortingDropdownOpen={setIsSortingDropdownOpen}
            />
          </div>
        </div>
        {/* Display products or message if no products */}
        {hasDresses ? (
          <div className="p-8 grid grid-cols-4 gap-8">
            {currentDresses?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          "You have 0 products"
        )}
      </div>
      {/* Pagination component */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={dresses.length}
        itemsPerPage={itemsPerPage}
      />
    </>
  );
};

export default Products;
