import { useState } from "react";
import useTitle from "../../../hooks/useTitle";
import useDresses from "../../../hooks/useDresses";
import Spinner from "../../../components/ui/Spinner";
import Container from "../../../components/ui/Container";
import Filters from "../../../components/shared/Filters";
import NoDress from "./components/NoDress";
import DressList from "./components/DressList";
import Pagination from "../../../components/ui/Pagination";

const Dresses = () => {
  useTitle("Products");
  const { dresses, isLoading, error } = useDresses();

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
    <Container marginTop={12}>
      <Filters />

      {!currentDresses || currentDresses?.length === 0 || error ? (
        <NoDress />
      ) : (
        <>
          <DressList dresses={currentDresses} />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalItems={dresses?.length}
            itemsPerPage={itemsPerPage}
          />
        </>
      )}
    </Container>
  );
};

export default Dresses;
