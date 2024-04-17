import { useState } from "react";
import DressCard from "../../../components/cards/DressCard";
import Container from "../../../components/ui/Container";
import dresses from "../Home/data/dresses";
import SortBy from "./components/SortBy";

const Dresses = () => {
  const [sortBy, setSortBy] = useState("newest");
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const handleSortChange = (key) => {
    setSortBy(key);
    setShowSortDropdown(false);
  };

  return (
    <Container marginTop={0}>
      <div className="my-12 flex flex-col-reverse sm:flex-row justify-between items-center gap-8">
        <h4 className="text-lg">
          Total Dresses:
          <span className="text-primary"> {dresses ? dresses.length : 0}</span>
        </h4>
        <SortBy
          sortBy={sortBy}
          handleSortChange={handleSortChange}
          showSortDropdown={showSortDropdown}
          setShowSortDropdown={setShowSortDropdown}
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
        {dresses.map((dress) => (
          <DressCard key={dress._id} dress={dress} />
        ))}
      </div>
    </Container>
  );
};

export default Dresses;
