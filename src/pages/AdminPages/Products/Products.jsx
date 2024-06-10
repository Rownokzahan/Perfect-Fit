import { useState } from "react";
import useTitle from "../../../hooks/useTitle";
import useDresses from "../../../hooks/useDresses";
import Spinner from "../../../components/ui/Spinner";
import NoProduct from "./components/NoProduct";
import Header from "./components/Header";
import Filters from "../../../components/shared/Filters";
import ProductList from "./components/ProductList";
import Pagination from "../../../components/ui/Pagination";

const Products = () => {
  useTitle("Products");
  const { dresses, isLoading } = useDresses();

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
        {currentDresses?.length === 0 ? (
          <NoProduct />
        ) : (
          <div className="p-8">
            <Filters />
            <ProductList products={currentDresses} />

            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalItems={dresses?.length}
              itemsPerPage={itemsPerPage}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
