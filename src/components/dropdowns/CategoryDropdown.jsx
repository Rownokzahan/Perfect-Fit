import Dropdown from "./Dropdown";
import dressCategories from "../../data/dressCategories";

const CategoryDropdown = () => {
  return (
    <Dropdown
      items={dressCategories}
      defaultLabel="All Dress"
      paramKey="category"
    />
  );
};

export default CategoryDropdown;
