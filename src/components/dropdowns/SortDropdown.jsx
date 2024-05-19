import Dropdown from "./Dropdown";
import dressSortOptions from "../../data/dressSortOptions";

const SortDropdown = () => {
  return (
    <Dropdown items={dressSortOptions} defaultLabel="Newest" paramKey="sort" />
  );
};

export default SortDropdown;
