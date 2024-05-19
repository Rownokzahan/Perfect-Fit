import CategoryDropdown from "../../../../components/dropdowns/CategoryDropdown";
import SortDropdown from "../../../../components/dropdowns/SortDropdown";

const Filters = () => {
  return (
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
  );
};

export default Filters;
