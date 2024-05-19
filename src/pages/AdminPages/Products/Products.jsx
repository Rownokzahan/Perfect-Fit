import { useState } from "react";
import { useLocation } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import { useGetDressesQuery } from "../../../redux/features/api/dressApi";
import Spinner from "../../../components/ui/Spinner";
import NoProduct from "./components/NoProduct";
import Header from "./components/Header";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";
import Pagination from "../../../components/ui/Pagination";

const Products = () => {
  useTitle("Products");

  const { data, isLoading, error } = useGetDressesQuery();
  let dresses = data;

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");
  const sortBy = params.get("sort");

  if (category && category !== "all-dress") {
    const filteredDresses = dresses?.filter(
      (dress) => dress.category === category
    );
    dresses = filteredDresses;
  }

  if (sortBy && category !== "newest") {
    const filteredDresses = dresses?.filter(
      (dress) => dress.category === category
    );
    dresses = filteredDresses;
  }

  // State variables for pagination
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the dresses array based on current page
  const currentDresses = dresses?.slice(startIndex, endIndex);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <div className="bg-white min-h-[70vh] border rounded relative">
        {error || !currentDresses || currentDresses?.length === 0 ? (
          <NoProduct />
        ) : (
          <>
            <Filters />
            <ProductList products={currentDresses} />

            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalItems={dresses?.length}
              itemsPerPage={itemsPerPage}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Products;
