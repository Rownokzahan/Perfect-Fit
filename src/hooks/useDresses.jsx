import { useGetDressesQuery } from "../redux/features/api/dressApi";
import { useLocation } from "react-router-dom";

const useDresses = () => {
  const { data, isLoading, error } = useGetDressesQuery();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");
  const sortBy = params.get("sort");

  let dresses = data;

  if (category && category !== "all-dress") {
    dresses = dresses?.filter((dress) => dress.category === category);
  }

  if (sortBy && sortBy !== "newest") {
    dresses = dresses?.filter((dress) => dress.category === category);
  }

  return { dresses, isLoading, error };
};

export default useDresses;
