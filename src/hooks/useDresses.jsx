import { useGetDressesQuery } from "../redux/features/api/dressApi";
import { useLocation } from "react-router-dom";

const sortDresses = (dresses, sortBy) => {
  switch (sortBy) {
    case "price-low-to-high":
      return dresses?.slice().sort((a, b) => Number(a.price) - Number(b.price));
    case "price-high-to-low":
      return dresses?.slice().sort((a, b) => Number(b.price) - Number(a.price));
    case "a-z":
      return dresses?.slice().sort((a, b) => a.name.localeCompare(b.name));
    case "z-a":
      return dresses?.slice().sort((a, b) => b.name.localeCompare(a.name));
    case "newest":
      return dresses;
    default:
      return dresses;
  }
};

const useDresses = () => {
  const { data, isLoading, error } = useGetDressesQuery();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");
  const sortBy = params.get("sort");
  const search = params.get("search");

  let dresses = data;

  if (category && category !== "all-dress") {
    dresses = dresses?.filter((dress) => dress.category === category);
  }

  if (search) {
    dresses = dresses?.filter((dress) =>
      dress.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (sortBy) {
    dresses = sortDresses(dresses, sortBy);
  }

  return { dresses, isLoading, error };
};

export default useDresses;
