import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import { useGetDressesQuery } from "../../../redux/features/api/dressApi";
import Spinner from "../../../components/ui/Spinner";
import NoProduct from "./components/NoProduct";
import Title from "../../../components/ui/Title";
import CategoryDropdown from "../../../components/dropdowns/CategoryDropdown";
import SortDropdown from "../../../components/dropdowns/SortDropdown";
import ProductCard from "../../../components/cards/ProductCard";
import Pagination from "../../../components/ui/Pagination";

const Products = () => {
  useTitle("Products");

  const { data, isLoading, error } = useGetDressesQuery();
  const [dresses, setDresses] = useState([]);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");

  let filteredDresses = data;

  if (category) {
    filteredDresses = data?.filter((dress) => dress.category === category);
  }

  // State variables for pagination
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the dresses array based on current page
  const currentDresses = filteredDresses?.slice(startIndex, endIndex);

  useEffect(() => {
    if (data) {
      setDresses(data);
    }
  }, [data]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error || !dresses || dresses?.length === 0) {
    return <NoProduct />;
  }

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

      <div className="bg-white min-h-screen border rounded">
        <div className="p-8 border-b flex items-center justify-between">
          {/* Search bar */}
          <input
            type="text"
            name=""
            id=""
            placeholder="Search..."
            className="text-sm font-medium px-4 py-2 rounded border-2 border-primary-white bg-primary-white focus:bg-white focus:outline-none"
          />
          <div className="flex items-center gap-8">
            <CategoryDropdown />
            <SortDropdown />
          </div>
        </div>

        <div className="p-8 grid grid-cols-4 gap-8">
          {currentDresses?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      {/* Pagination component */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={filteredDresses?.length}
        itemsPerPage={itemsPerPage}
      />
    </>
  );
};

export default Products;
